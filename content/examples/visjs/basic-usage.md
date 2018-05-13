---
title     : VisJs - basicUsage
---

Data and config from VisJs basicUsage example (http://visjs.org/examples/network/basicUsage.html)

{{< repl-visjs mode="JavaScript" height="400" >}}
nodes = new vis.DataSet([
    {id: 1, label: 'Node 1'},
    {id: 2, label: 'Node 2'},
    {id: 3, label: 'Node 3'},
    {id: 4, label: 'Node 4'},
    {id: 5, label: 'Node 5'}
  ]);

edges = new vis.DataSet([
    {from: 1, to: 3},
    {from: 1, to: 2},
    {from: 2, to: 4},
    {from: 2, to: 5},
    {from: 3, to: 3}
  ]);

options = {}

network.setData({ nodes:nodes , edges: edges}, options)

{{</ repl-visjs >}}