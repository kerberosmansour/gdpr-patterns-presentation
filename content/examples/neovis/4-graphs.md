---
title     : 4-graphs
type      : neo4j
layout    : query-in-md
gravity   : -500
root_node: 'RISK-855'
labels   :
    RISK :
        caption: key
        image : /img/osa/osa_warning.png
    Risk_Service:
        shape: box
        caption: key
    ISSUE:
        caption: key
relationships:
---

Here are multiple queries of cypher `MATCH (a)-[to]-(b)` with different values of `Limit`

<div class='row'>

    {{< cypher title="showing 5" id="limit_5" height="200">}}
        MATCH (a)-[to]-(b)
        return * Limit 5
    {{</ cypher >}}


    {{< cypher title="showing 20" id="limit_20" height="200" >}}
        //call db.schema()
        MATCH (a)-[to]-(b)
            return * Limit 20
    {{</ cypher >}}

</div>

<div class='row'>

    {{< cypher title="showing 50 (hierarchical)" id="limit_50" height="200"  layout="hierarchical" >}}
        MATCH (a)-[to]-(b)
        return * Limit 50
    {{</ cypher >}}


    {{< cypher title="showing 100" id="limit_100" height="200" >}}
        MATCH (a)-[to]-(b)
            return * Limit 100
    {{</ cypher >}}

</div>
