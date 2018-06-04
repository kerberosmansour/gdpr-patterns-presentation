---
type         : neo4j
height       : 850
relationships:
gravity      : -7000
#menu         : main
weight       : 5
labels       :
    RISK  :
        mass : 5
        size : 10
    Pillar  :
        mass : 100
        size : 20
    Threat_Model  :
        mass : 100
        size : 20
    Vulnerability  :
        mass : 100
        size : 20
    IT_System  :
        mass : 100
        size : 20
    Security_Controls  :
        mass : 100
        size : 20
    Security_Test  :
        mass : 100
        size : 20
---


examples: [first 10 relationships](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+10) ,
[db schema](?cypher=call db.schema()) ,
[return 150](?cypher=MATCH+(a)-[to]-(b)+%0areturn+*+%0aLimit+150)

{{< cypher-query height="80">}}
MATCH (a)-[to]-(b) 
return * 
Limit 10
{{</ cypher-query >}}
