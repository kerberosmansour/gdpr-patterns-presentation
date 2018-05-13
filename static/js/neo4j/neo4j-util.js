
var viz;
var cypher       = params_Data.cypher;

class neo4j_Util {
    constructor() {
        this.viz = null
    }


    async draw(values) {

        let self = this;
        self.values = values ? values  : self.values;  // store this values for later
        var config = {
            container_id    : self.values.id,
            server_url      : server_url,
            server_user     : server_user,
            server_password : server_password,
            labels          : params_Data.labels,
            relationships   : params_Data.relationships,
            initial_cypher  : self.values.cypher,
            layout          : self.values.layout
        };

        self.viz = new NeoVis.default(config);
        self.viz.setup();

        self.reset_Stats()

        if (params_Data.hide_Graph =="true")
        {
            await self.viz.exec_Neo4j_query(self.viz._query)
                          .catch(self.handle_Neo4j_Error)
            self.show_Table()
            $('#cypher-div').hide()
        }
        else
        {

            await self.viz.render_async()
                       .catch(self.handle_Neo4j_Error)
            self.show_Stats()
            self.show_Table()
            self.show_RawData()
            self.setup_Events()
            self.fix_Nodes_Label_Witdh()

            let options = {
                nodes: {
                    shape: 'box',
                },
                //interaction: { hover: true },
                physics: {
                    barnesHut: {
                        gravitationalConstant: params_Data.options.gravitationalConstant,
                        //centralGravity : 0.5
                    }
                }
            }
            if (self.viz._network) {
                self.viz._network.setOptions(options)
                self.setLayout(config.layout)
            }
        }


    }

    fix_Nodes_Label_Witdh() {
         function wordwrap ( str, width, brk, cut ) {
            brk = brk || '\n';
            width = width || 75;
            cut = cut || false;

            if (!str) { return str; }

            var regex = '.{1,' +width+ '}(\\s|$)' + (cut ? '|.{' +width+ '}|.+$' : '|\\S+?(\\s|$)');

            return str.match( RegExp(regex, 'g') ).join( brk );
        }
        let left = this
        let nodes = neo.viz._network.body.data.nodes;
        let max_Size = 20
        nodes.forEach(function(node) {
            if (node.label.length > max_Size) {
                let label =  wordwrap(node.label, max_Size, '\n')
                nodes.update({id:node.id, label: label})
            }
            else
            {
                // if (node.label == 'RISK' ||
                //     node.label == 'ISSUE' ||
                //     node.label == 'Project' ||
                //     node.label == 'Vulnerability' ||
                //     node.label == 'Programme') {
                //     nodes.remove({'id':node.id})
                // }
            }

        })
    }
    setLayout(layout) {
        let self = this;
        if (layout === 'hierarchical')
        {
            let options = {
                layout: {
                    hierarchical: {
                        direction: "UD",
                        sortMethod: "directed"
                    }
                }
            }
            self.viz._network.setOptions(options)
        }

    }

    run_query(cypher) {
        this.values.cypher = cypher
        this.draw()
    }

    edges_Ids () {
        return Object.keys(neo.viz._edges);
    }
    nodes_Ids () {
        return Object.keys(neo.viz._nodes);
    }
    handle_Neo4j_Error (err){
        $("#cypher-error-alert").show()
        $("#cypher-error-text").html(err.message);
        return true
    }
    reset_Stats() {
        $('#node_count').html(0)
        $('#edge_count').html(0)
        $('#loading-spinner').show()
        $("#cypher-error-alert").hide()     // move to separate ui setup method
    }
    handle_Double_Click(params) {     // move to shortcode
        //console.log(params)
        if (params.nodes.length === 1) {
            let id = params.nodes[0]
            let nodes = neo.viz._network.body.data.nodes;
            let key = nodes.get(id).key
            let url = 'https://jira.photobox.com/browse/' + key
            window.open(url, '_blank')
        }
    }
    setup_Events() {
        let self = this
         neo.viz._network.on("doubleClick", function (params) {
             self.handle_Double_Click(params)
             //console.log('on DoubleCLick', params)
         })
        neo.viz._network.on("selectNode", function (params) {
            if (window.on_Node_Selected)
                window.on_Node_Selected(params)
            //console.log('Node selected', params)
        })
        neo.viz._network.on("hoverNode", function (params) { // needs interaction: { hover: true } enabled
            console.log('on hoverNode', params)
        })
    }
    show_Stats() {
        $('#node_count').html(neo.nodes_Ids().length)
        $('#edge_count').html(neo.edges_Ids().length)
        $('#loading-spinner').hide()
    }
    show_RawData() {
        if ($('#neo4j-received-data').length) {     // see if we are in debug mode (this need to be refactored )
            var received_Data = JSON.stringify(neo.viz._records, null, "   ")
            var visjs_Nodes   = JSON.stringify(neo.viz._nodes  , null, "   ")
            var visjs_Edges   = JSON.stringify(neo.viz._edges  , null, "   ")
            $('#neo4j-received-data').val(received_Data)
            $('#neo4j-visjs-nodes').val(visjs_Nodes)
            $('#neo4j-visjs-edges').val(visjs_Edges)
        }
    }
    show_Table() {
        if ($('#neo4j-table').length) {     // see if this id exists and show the table (this need to be refactored )
            create_Table()
        }
    }

    // these are experiment methods for the examples
    cluster_By_Group(name) {
        //new Promise()
        let network = neo.viz._network
        var clusterOptionsByData = {
            joinCondition:function(childOptions) {
                return childOptions.group == name;
            },
            clusterNodeProperties: {id:'cidCluster', borderWidth:3, shape:'circle', label:name}
        };
        neo.viz._network.cluster(clusterOptionsByData);


        network.on("selectNode", function(params) {
            console.log(params)
            if (params.nodes.length == 1) {
                if (network.isCluster(params.nodes[0]) == true) {
                    network.openCluster(params.nodes[0]);
                }
            }
        });
    }

    go_to_node (nodeId, speed) {

        let network = neo.viz._network
        var options = {
            scale: 1.0,
            offset: {x:0,y:0},
            animation: {
                duration: speed ? speed : 1000,
                easingFunction: "easeInOutQuad"
            }
        };

        if( ! neo.viz._nodes[nodeId])
            nodeId = this.nodes_Ids()[nodeId]

        network.selectNodes([nodeId])
        network.focus(nodeId, options)
        return new Promise( resolve =>{
            network.once('animationFinished', function() {
                resolve()
            })
        })
    }

}