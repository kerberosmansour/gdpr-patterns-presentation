---
title      : Vulnerabilites of Data Journey
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 1
labels     :
relationships:
---

{{< cypher-query height="80">}}
MATCH (a {key:'GDPR-1'})-[to:Data_touches|:Data_sources|:relates_to]-(b)-[r:Has_VULN]-(c)-[z:Has_RISK|:Is_missing]-(d)
WHERE a.summary is not null
return distinct c.key as VulnID, b.key as SystemID, c.summary as Vulnerability
{{</ cypher-query >}}

{{< neo4j-table >}}