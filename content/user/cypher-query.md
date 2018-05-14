---
title        : Cypher Query
type         : neo4j
height       : 350
labels       :
relationships:
gravity      : -5000
#menu         : main
weight       : 5
---

examples: [first 10 relationships](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+10) ,
[db schema](?cypher=call db.schema()) ,
[return 150](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+150)

### Query
{{< cypher-query height="80">}}
MATCH (a)-[to]-(b) 
return * 
Limit 10
{{</ cypher-query >}}


### Graph