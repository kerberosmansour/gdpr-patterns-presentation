---
title : Server DSL and NeoVis
type: neo4j
cypher: match (a) return * limit 10
---


{{< repl-dsl height="100">}}
return new Promise (resolve)=>
    console.log('in server side dsl')
    nodes_Count = await @.neo4j.nodes_Count()
    resolve nodes : nodes_Count
{{</ repl-dsl >}}

<hr/>

{{< cypher-query height="80" autorun="false">}}

{{</ cypher-query >}}



