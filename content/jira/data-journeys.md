---
title     : Data Journey
type      : neo4j
cypher    :
labels    :
    RISK:
        caption: key
        image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13534&avatarType=issuetype
    Risk_Service:
        caption: key
    IT_System:
        caption: key
        shape: triangle
        mass: 4
    Data_Journey:
        image: https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13630&avatarType=issuetype
        caption: key
    ISSUE:
        caption: key
        shape: square
relationships:
---

Here are all the Journeys

{{< cypher-query height="80">}}
MATCH (a:Data_Journey {key: "GDPR-206"})-[to*0..3]-(b) return * Limit 150
{{</ cypher-query >}}