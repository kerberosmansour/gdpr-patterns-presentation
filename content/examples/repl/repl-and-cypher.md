---
title  : Coffee Script REPL and Cypher code
type   : neo4j
cypher : match (a)-[b]-(c) return * limit 10
---

{{< repl >}}
text = 'this is a new node'
nodes = neo.viz._network.body.data.nodes;
edges = neo.viz._network.body.data.edges;
node  = nodes.add({label: text, shape: 'box', font: { size: 20 } })[0]
id_1  = Object.keys(nodes._data)[0]
edges.add( {from : id_1  , to: node })
return node;
{{</ repl >}}
