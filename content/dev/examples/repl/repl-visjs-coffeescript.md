---
title     : VisJs - coffeescript test
---

Data and config from VisJs basicUsage example (http://visjs.org/examples/network/basicUsage.html)

{{< repl-visjs height="400" >}}
nodes = [
    {id: 1, label: 'first test 1' , shape: "box"  },
    {id: 2, label: 'Node 2'       , color: "gray" },
    {id: 3, label: 'Node 3'                       },
    {id: 4, label: 'Node 4'                       }
  ]

edges = [
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 1, to: 4},
  ];

options = {}

graph(nodes,edges,options)

{{</ repl-visjs >}}