---
title      : List of Security Projects
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 7
labels     :
relationships:
---

{{< cypher-query height="80">}}
MATCH (a:Project )-[to]-(b)
where a.key =~ '.*SEC.*' and a.summary is not null
RETURN distinct a.key as Key,  a.summary as Project, a.assignee as Assignee, a.issue_type as IssueType

{{</ cypher-query >}}

{{< neo4j-table >}}