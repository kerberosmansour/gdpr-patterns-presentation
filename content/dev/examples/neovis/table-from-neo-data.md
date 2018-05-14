---
title      : Table - Cypher Query
type       : neo4j
height     : 350
cypher     : MATCH (a:RISK)-[to]-(b) RETURN a.key,type(to),b.key LIMIT 250
hide_graph : true
labels     :
relationships:
---


### Query
{{< cypher-query>}}

{{</ cypher-query >}}

{{< neo4j-table >}}