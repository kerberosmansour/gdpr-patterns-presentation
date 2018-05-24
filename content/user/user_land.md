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

examples: 
[first 20 relationships](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+20),
[first 20 relationships for GDPR 257](?cypher=MATCH+(a)-[to]-(b)+%0a where a.key="GDPR-257" %0a return+*+%0aLimit+20)


{{< cypher-query height="80">}}
MATCH (a)-[to]-(b) 
return * 
Limit 10
{{</ cypher-query >}}

