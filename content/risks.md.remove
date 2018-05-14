---
title     : Neo4J visualisation of RISK
type      : neo4j
layout    : simple
#cypher    : MATCH (n)-[r]->(m) RETURN n,r,m Limit 40
#cypher    : MATCH (n {key:'RISK-1255'}) MATCH path = (n)-[m:is_child_of*1..10]->(v) return path limit 100
#cypher    : MATCH (n:RISK {key:'RISK-855'}) MATCH path = (n:RISK)-[m:is_parent_of*1..10]->(v:RISK) return path limit 200
cypher    : MATCH (n:RISK {key:'RISK-855'}) MATCH path = (n:RISK)-[:is_parent_of*..3]->(v:RISK) return path limit 100
#cypher    : MATCH (n:RISK)-[m:is_child_of*1..10]->(v)  where labels(v) = ['RISK'] return * limit 1500

#cypher    : MATCH (n:RISK) MATCH path = (n)-[m:is_child_of*1..4]->(v) return path limit 300
gravity   : -1500
root_node: 'RISK-855'
labels   :
    ISSUE:
        caption: key
        color  : lightgray
        #image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13544&avatarType=issuetype
    RISK:
        caption: key
        image : /img/osa/osa_warning.png
        #image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13534&avatarType=issuetype
    _Risk_Service:
        caption: key
        #image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13545&avatarType=issuetype
    Risk_Taxonomy:
        caption: key
        image: /img/osa/osa_ics_drive.png
        #image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13538&avatarType=issuetype
relationships:
    is_parent_of:
        label : parent
        arrow: true
    is_child_of:
        label : child
        arrow : true
    relates_to:
        label : relates


---

This is a Neovis graph on RISKs  (with options from defined in an
hugo markdown file )

