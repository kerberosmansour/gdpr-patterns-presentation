---
title     : Risk Owners
type      : neo4j
labels    :
    RISK:
        caption: key
        image  : /img/osa/osa_warning.png
    Risk_Service:
        caption: key
    ISSUE:
        caption: key
    Summary:
        caption: key
        shape  : box
    Risk_Owner:
        caption: key
        mass: 4
    Risk_Rating:
        caption: key
relationships:
---

Risks mapped to owners

{{< cypher-query height="80">}}
MATCH path=(a:Risk_Rating { key: "High"})-[to*..2]-(b:Risk_Owner) return path Limit 200
{{</ cypher-query >}}