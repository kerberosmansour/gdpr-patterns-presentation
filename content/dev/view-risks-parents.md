---
title     : View risks parents
type      : neo4j
height    : 340
labels    :
    RISK :
        caption: key
        image  : /img/osa/osa_warning.png
relationships:
    is_parent_of:
        arrow: true
        label: "_"
        size: 0.3
---

write your own cypher queries

### Query
{{< cypher-query height="100">}}
MATCH (a:RISK {key:"RISK-223"} )-[to:is_parent_of]-(b)
return *
Limit 50
{{</ cypher-query >}}

### Graph