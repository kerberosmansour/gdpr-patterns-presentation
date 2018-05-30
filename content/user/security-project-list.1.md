---
title      : Top 10 users with max open tickets
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 3
labels     :
relationships:
---

{{< cypher-query height="80">}}
MATCH (a)
where a.summary is not null and a.status is not null and a.assignee is not null and a.status<>"Done"
RETURN DISTINCT a.assignee, count(*) as count
ORDER BY count DESC
LIMIT 10

{{</ cypher-query >}}

{{< neo4j-table >}}