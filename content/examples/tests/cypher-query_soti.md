---
title        : Test Soti
type         : neo4j
height       : 450
labels       :
relationships:
    ACTED_IN:
        color: red
gravity      : -5000
menu         : main
weight       : 8
---

Testing Schema 

### Query
{{< cypher-query height="80">}}
MATCH (a)-[to]-(b)
return *
Limit 10
{{</ cypher-query >}}
### Graph