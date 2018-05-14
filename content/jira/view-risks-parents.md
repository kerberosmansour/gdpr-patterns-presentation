---
title     : View risks parents
type      : neo4j
height    : 340
labels    :
    RISK :
        caption: key
relationships:
    is_parent_of:
        arrow: true
        label: ""
---

write your own cypher queries

### Query
{{< cypher-query height="100">}}
MATCH (a:RISK {key:"RISK-223"} )-[to:is_parent_of*0..2]-(b)
return *
Limit 50
{{</ cypher-query >}}

### Graph