---
title    : Debug Cypher query
type     : neo4j
gravity  : -5000
height   : 150
---

This view can be used to see what data is received from
Neo4J and how they are transformed into visjs objects

#### Query
{{< cypher-query >}}
    MATCH (a)-[to:relates_to]-(b) return * Limit 2
{{</ cypher-query >}}

{{< neo4j-raw-data >}}

#### Graph

<!-- neovis environment (inserted via HUGO neo4j type) -->