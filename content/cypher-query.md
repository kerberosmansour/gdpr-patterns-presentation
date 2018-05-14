---
title        : Cypher Query
type         : neo4j
height       : 350
labels       :
relationships:
gravity      : -5000
menu         : main
weight       : 5
---

write your own cypher queries

examples: [first 10 relationships](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+10) ,
[db schema](?cypher=call db.schema()) ,
[return 150](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+150)

### Query
{{< cypher-query height="80">}}

{{</ cypher-query >}}


### Graph