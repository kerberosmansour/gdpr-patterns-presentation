---
title     : by Risk Owner
type      : neo4j
#gravity   : -4000
view      : fullscreen
height    : 800
labels    :
    #RISK:
    #    caption: key
    #    image  : /img/osa/osa_warning.png
    Risk_Owner:
        caption: key
        size   : 40
        mass: 3
    Critical:
        caption: key
        color : darkred
        size: 1
        mass: 2
    High:
        caption: key
        color : red
        size: 10
        mass: 2
    Medium:
        caption: key
        color : Orange
        size: 7
        mass: 1
    Low:
        caption: key
        color : LightBlue
        size: 3
        mass: 0.5
    To_be_determined:
        caption: key
        color : Gray
        size: 1

relationships:
    owns_risk:
        label:
---

Risks mapped to owners

{{< cypher-query height="40">}}
MATCH path=(a)-[to]-(b) return path Limit 50

{{</ cypher-query >}}


