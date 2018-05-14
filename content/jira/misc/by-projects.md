---
title     : by Projects
type      : neo4j
#gravity   : -4000
view      : fullscreen
height    : 800
labels    :
    Epic:
        caption: summary
        size   : 20
        mass   : 40
    Programme:
        caption: summary
        color  : orange
        size   : 20
        mass   : 2
    Project:
        caption: summary
        color  : lightgreen
        mass   : 5
        size   : 2
    RISK:
        caption: summary
        color  : red
        size   : 1
relationships:
    owns_risk:
        label:
    is_child_of:
        label:
    is_parent_of:
        label:
---

Risks mapped to owners

{{< cypher-query height="100">}}
//MATCH path=(a {key: 'SEC-5510'})-[]-(b:Programme)-[]-(c:Project)
//    where b.summary is not NULL and 'Moonpig' in c.cost_center
//return path

MATCH path=(a {key: 'SEC-5510'})-[]-(b:Programme)-[]-(c:Project)-[]-(d:RISK)
     where b.summary is not NULL
return path Limit 250

{{</ cypher-query >}}




