---
title        : Data Journey with Threat Modeling
type         : neo4j
height       : 800
labels       :
relationships:
gravity      : -2000
#menu         : main
layout    : for-tm

weight       : 2
labels    :
    RISK:
        caption: key
        toltip: 'a'
        image  : http://www.free-icons-download.net/images/risk-icon-16781.png
    Risk_Service:
        caption: key
    Data_Journey:
        caption: summary
        image  : https://jira.photobox.com/secure/viewavatar?size=xsmall&avatarId=13630&avatarType=issuetype
    Security_Controls:
        caption: summary
        image:  https://www.mediware.com/wp-content/uploads/Untitled-1-300x300.png
    ISSUE:
        caption: key
    IT_System:
        caption: summary
        image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gnome-emblem-system.svg/2000px-Gnome-emblem-system.svg.png
    Task:
        caption: key
    Vulnerability:
        caption: key
        image: https://www.iconshock.com/image/Impressions/Security/vulnerability
    Summary:
        caption: key
        shape  : box
    Risk_Owner:
        caption: key
    Risk_Rating:
        caption: key

relationships:
    Data_touches:
        arrow: true
        label:
    Has_VULN:
        arrow: true
        label:
    Has_RISK:
        arrow: true
        label:
    Is_missing:
        arrow: true
        label: 
---
 

{{< cypher-query height="80">}}
MATCH (a {key:'GDPR-1'})-[to:Data_touches|:Data_sources|:relates_to]-(b)-[r:Has_VULN]-(c)-[z:Has_RISK|:Is_missing]-(d)
WHERE a.summary is not null
return * 
Limit 5000
{{</ cypher-query >}}
