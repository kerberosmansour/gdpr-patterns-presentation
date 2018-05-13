---
title     : View Jira Data
type      : neo4j
layout    : with-jira-view
cypher    : MATCH (a)-[to]-(b) return * Limit 20
menu      : main
gravity   : -2000
height    : 350
weight    : 10
labels    :
    RISK:
        caption: key
        image  : /img/osa/osa_warning.png
    Risk_Service:
        caption: key
    Data_Journey:
        caption: key
    Security_Controls:
        caption: key
    ISSUE:
        caption: key
    Task:
        caption: key
    Vulnerability:
        caption: key
    Summary:
        caption: key
        shape  : box
    Risk_Owner:
        caption: key
    Risk_Rating:
        caption: key

relationships:
---

{{< cypher-query>}}
{{</ cypher-query >}}

