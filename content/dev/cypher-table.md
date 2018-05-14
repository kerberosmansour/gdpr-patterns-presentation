---
title      : Cypher Table
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 7
labels     :
relationships:
---

other:
   [labels and keys](?cypher=MATCH (a)-[to]-(b) RETURN labels(a),a.key ,type(to), labels(b), b.key LIMIT 50)
 , [distinct labels and types](?cypher=MATCH (a)-[to]-(b) RETURN Distinct labels(a), type(to))
### Query
{{< cypher-query height="80">}}
MATCH (a)-[to]-(b)
RETURN a.key,type(to),b.key
LIMIT 250
{{</ cypher-query >}}

{{< neo4j-table >}}