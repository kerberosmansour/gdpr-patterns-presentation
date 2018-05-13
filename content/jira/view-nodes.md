---
title     : View Nodes
type      : neo4j
cypher    : MATCH (a)-[to]-(b) return * Limit 50

#height    : 100
#width     : 100
#layout    : hierarchical
labels    :
    RISK:
        caption: key
        image  : /img/osa/osa_warning.png
    Risk_Service:
        caption: key
relationships:
---


### Query
{{< cypher-query>}}

{{</ cypher-query >}}


### Graph