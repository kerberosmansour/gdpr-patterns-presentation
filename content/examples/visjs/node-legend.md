---
title     : VisJs - nodeLegend
---

Data and config from VisJs nodeLegend example (http://visjs.org/examples/network/exampleApplications/nodeLegend.html)

{{< repl-visjs mode="JavaScript" height="400" >}}
var LENGTH_MAIN = 350,
        LENGTH_SERVER = 150,
        LENGTH_SUB = 50,
        WIDTH_SCALE = 2,
        GRAY = 'gray'

var nodes = [];
var edges = [];

nodes.push({id: 1, label: '192.168.0.1', group: 'switch', value: 10});
nodes.push({id: 2, label: '192.168.0.2', group: 'switch', value: 8});
nodes.push({id: 3, label: '192.168.0.3', group: 'switch', value: 6});
edges.push({from: 1, to: 2, length: LENGTH_MAIN, width: WIDTH_SCALE * 6, label: '0.71 mbps'});
edges.push({from: 1, to: 3, length: LENGTH_MAIN, width: WIDTH_SCALE * 4, label: '0.55 mbps'});

nodes.push({id: 201, label: '192.168.0.201', group: 'desktop', value: 1});
edges.push({from: 2, to: 201, length: LENGTH_SUB, color: GRAY, width: WIDTH_SCALE});

// group around 3
nodes.push({id: 202, label: '192.168.0.202', group: 'desktop', value: 4});
edges.push({from: 3, to: 202, length: LENGTH_SUB, color: GRAY, width: WIDTH_SCALE * 2});
for (var i = 230; i <= 231; i++ ) {
    nodes.push({id: i, label: '192.168.0.' + i, group: 'mobile', value: 2});
    edges.push({from: 3, to: i, length: LENGTH_SUB, color: GRAY, fontColor: GRAY, width: WIDTH_SCALE});
  }

      var x = - container.clientWidth / 2 + 50;
      var y = - container.clientHeight / 2 + 50;

      var step = 70;
      nodes.push({id: 1001, x: x, y: y + step     , label: 'Switch', group: 'switch', value: 1, fixed: true,  physics:false});
      nodes.push({id: 1003, x: x, y: y + 2 * step , label: 'Computer', group: 'desktop', value: 1, fixed: true,  physics:false});
      nodes.push({id: 1004, x: x, y: y + 3 * step , label: 'Smartphone', group: 'mobile', value: 1, fixed: true,  physics:false});

var options = {
        nodes: {
          scaling: { min: 16, max: 32 }
        },
        physics:{
          barnesHut:{gravitationalConstant:-5000},
        },
        groups: {
          'switch': { shape: 'triangle' , color: '#FF9900' },
          desktop : { shape: 'dot'      , color: "#2B7CE9" },
          mobile  : { shape: 'square'   , color: "#5A1E5C" }
        }
      };
var data = {
nodes: nodes,
edges: edges
};



network = new vis.Network(container, data, options);

{{</ repl-visjs >}}