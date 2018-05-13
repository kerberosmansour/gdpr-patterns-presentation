---
title     : Risks from Data Journey
type      : neo4j
cypher    : MATCH (a:Data_Journey)-[to*0..2]-(b) return * Limit 50
labels    :
    RISK:
        caption: key
        image  : /img/osa/osa_warning.png
    Risk_Service:
        caption: key
    IT_System:
        shape: triangle
        mass: 4
relationships:
height: 500
---

Here are all the Risks Journeys