---
title   : Neo4J visualisation
type    : neo4j
layout  : simple
cypher  : MATCH (n)-[r]->(m) RETURN n,r,m Limit 10
gravity : -8000
labels  :
    Data_Journey:
        image   : 'http://visjs.org/examples/network/img/refresh-cl/System-Firewall-2-icon.png'
        #icon   : '\uf007'  # user shape
        #color  : blue
        mass   : 15
        caption: key
        #shape  : square
        #size   : 10
    Data_Source:
        image   : 'http://visjs.org/examples/network/img/refresh-cl/Hardware-Printer-Blue-icon.png'
        caption : key
        color   : green
        #size   : 10
    IT_System:
        image   : 'http://visjs.org/examples/network/img/refresh-cl/Hardware-My-Computer-3-icon.png'
        #mass    : 0.5
    RISK:
        caption : "key"
        label   : "an risk"
        shape   : triangle
        #size    : 10
        color   : red

relationships:

    Data_touches :
        caption  : key
        size     : 1
        label    : ""

        color    : blue
    Data_sources :
        label    : "sources"
        size     : 2
        color    : green
        dashes   : true
        arrow    : false
    Missing_High:
        label    : "RISK"
        size     : 2
        color    : red
        arrow    : true
        dashes   : true


---

This is a Neovis graph on GDPR  (with options from defined in an
hugo markdown file )