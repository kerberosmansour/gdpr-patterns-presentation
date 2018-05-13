---
title     : Run Cypher queries
type      : neo4j
height    : 350
labels    :
relationships:
---

write your own cypher queries

- [return 5](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+5)
- [return 50](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+50)
- [return 150](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+150)

### Query
{{< cypher-query height="80">}}
MATCH (a)-[to]-(b)
return *
Limit 10
{{</ cypher-query >}}


### Graph