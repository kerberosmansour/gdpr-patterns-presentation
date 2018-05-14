---
title     : Accepted Risks
type      : neo4j
cypher    : MATCH (a)-[to]-(b:Risk_Owner) where a.status = "Risk Approved" return *
gravity   : -300
labels    :
    RISK:
        label: .
        color: Crimson
        size: 1
    Risk_Service:
        caption: key
    ISSUE:
        caption: key
    Summary:
        caption: key
        shape  : box
    Risk_Owner:
        caption: key
        shape : box
        size  : 20
        mass  : 3
    Risk_Rating:
        caption: key
relationships:
    Risk_Owner :
        label:
        color : black
view  : fullscreen
height: 630
---