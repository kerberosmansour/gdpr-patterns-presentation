---
title : Data Import
type  : admin
layout: api-iframe
---

Use the links below to auto-populate the db

**Get data from Jira server**

- [get Issue  - RISK 1       ](/api/jira/issue/RISK-1?pretty)
- [Get Issues - Open Projects](/api/jira-server/issues?pretty&jql=project=SEC and issuetype = Project and status = Open)
- [Get Issues - All Projects ](/api/jira-server/issues?pretty&jql=project=SEC and issuetype = Project)
- [Get Issues - All Programme](/api/jira-server/issues?pretty&jql=project=SEC and issuetype = Programme)
- [Get Issues - All Risks    ](/api/jira-server/issues?pretty&jql=project=RISK)
- [Get Issues - All Vulns    ](/api/jira-server/issues?pretty&jql=project=VULN)
- [Get Issues - All GDPR     ](/api/jira-server/issues?pretty&jql=project=GDPR)


**creates Neo4J nodes**

single

- [add-Issue : RISK-1](/api/neo4j/nodes/create/RISK-1?pretty)
- [add-Issue-and-Linked-Nodes: RISK-1                    ](/api/neo4j/nodes/add-Issue-and-Linked-Nodes/RISK-2?pretty)
- [add-Issue-and-Linked-Nodes: RISK-1 (only Summary)     ](/api/neo4j/nodes/add-Issue-and-Linked-Nodes/RISK-2?pretty&filters=Summary)
- [add-Issue-Metatada-as-Nodes: RISK-2                   ](/api/neo4j/nodes/add-Issue-Metatada-as-Nodes/RISK-2?pretty)
- [add-Issues-Metatada-as-Nodes: RISK-100* (3 fields     ](/api/neo4j/nodes/add-Issues-Metatada-as-Nodes/RISK-100?pretty&filters=Summary,Risk+Owner,Risk+Rating)

in batch

- [create nodes for RISK-100* ](/api/neo4j/nodes/create-regex/RISK-100?pretty)
- [create nodes for SEC-*   ](/api/neo4j/nodes/create-regex/SEC-?pretty)
- [create nodes for RISK-*  ](/api/neo4j/nodes/create-regex/RISK-?pretty)
- [create nodes for VULN-*  ](/api/neo4j/nodes/create-regex/VULN-?pretty)
- [create nodes for GDPR-*  ](/api/neo4j/nodes/create-regex/GDPR-?pretty)



**danger zone**

- [reset db                 ](/api/neo4j/delete/all?pretty)



<a href="/admin/" target="_self">Back to /admin</a> , <a href="/admin/jira-api/" target="_self">Back to /admin/jira-api/</a>
