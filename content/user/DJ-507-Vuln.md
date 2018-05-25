---
title      : Vulnerabilites of DJ 507
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 8
labels     :
relationships:
---

{{< cypher-query height="80">}}
MATCH (a {key:'GDPR-507'})-[to:Data_touches|:Data_sources|:relates_to]-(b)-[r:Has_VULN]-(c)-[z:Has_RISK|:Is_missing]-(d)
WHERE a.summary is not null
return distinct c.key, b.key, c.summary
{{</ cypher-query >}}

{{< neo4j-table >}}