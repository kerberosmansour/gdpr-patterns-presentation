---
title     : Table - Neo4j Stats
type      : neo4j
height    : 350
hide_graph : true
---

### Query
{{< cypher-query height="200">}}
MATCH (n)
RETURN DISTINCT
       labels(n) As Labels,
       count(*)           AS NumofNodes,
       avg(size(keys(n))) AS AvgNumOfPropPerNode,
       min(size(keys(n))) AS MinNumPropPerNode,
       max(size(keys(n))) AS MaxNumPropPerNode,
       avg(size((n)-[]-())) AS AvgNumOfRelationships,
       min(size((n)-[]-())) AS MinNumOfRelationships,
       max(size((n)-[]-())) AS MaxNumOfRelationships
{{</ cypher-query >}}

{{< neo4j-table >}}
