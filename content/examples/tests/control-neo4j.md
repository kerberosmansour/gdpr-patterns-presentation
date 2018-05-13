---
title        : Control Neo4j
type         : admin
layout       : api-iframe
frame_height : 500
menu         : main
---

Multiple queries for the api (make sure you are on http;//localhost:3000)

####  Neo4J queries

 - [match (n) return n](/api/neo4j/cypher?pretty&query=match+(n)+return+n)
 - [match (n:Movie) return n](/api/neo4j/cypher?pretty&query=match (n:Movie) return n)
 - [create node](/api/neo4j/create/ABCAAA?a=123)
 - [create nodes for issue](/api/neo4j/nodes/create/GDPR-223?pretty') (GDPR-223)
 - [create nodes for issue](/api/neo4j/nodes/create/RISK-1092?pretty') (RISK-1092)
 - [create nodes using regex](/api/neo4j/nodes/create-regex/GDPR-22?pretty) (GDPR-22)


#### Data setup

 - [delete all nodes](/api/neo4j/delete/all?pretty)
 - [create all GDPR](/api/neo4j/nodes/create-regex/GDPR-?pretty)
 - [create all RISK](/api/neo4j/nodes/create-regex/RISK-?pretty)

#### Jira data

 - [all ids](/api/jira/issues/ids)
 - [id:files](/api/jira/issues/files)
 - [RISK-1](/api/jira/issue/RISK-1?pretty)
 - [Fields Schema](/api/jira/fields/schema)

