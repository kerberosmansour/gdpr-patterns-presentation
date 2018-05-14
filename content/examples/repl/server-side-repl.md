---
title : Server Side REPL
cypher: match (a)-[b]-(c) return * limit 10
---

examples of server side code

{{< repl-dsl height="40">}}
# 'the' answer
return 40+2;
{{</ repl-dsl >}}

{{< repl-dsl height="40">}}
# an error
return an-error;
{{</ repl-dsl >}}

{{< repl-dsl height="150">}}
# getting code from local jira cache
issue = @.map_Issues.issue('RISK-1')
issue._extra_Var = 123
return issue
{{</ repl-dsl >}}

{{< repl-dsl height="150">}}
# getting data from neo4j (server side)
return @.neo4j.run_Cypher 'MATCH (a) return count(a)'
{{</ repl-dsl >}}

---

[to repl examples](../)

