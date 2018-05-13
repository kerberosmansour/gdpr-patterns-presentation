---
title     : Example - Animate
type      : neo4j
cypher    : MATCH (a)-[to]-(b) return * Limit 40
labels    :
relationships:
---

Here is an example of animating nodes movements.

{{< repl mode="JavaScript" height="155" >}}
async function animate()
{
    speed = 1000
    for (i = 0; i < 5; i++)
    {
        await neo.go_to_node(i, speed)
        //neo.viz._network.fit()  // will reset view
    }
};

animate()
{{</ repl >}}

### Graph