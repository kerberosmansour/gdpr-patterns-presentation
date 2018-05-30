---
title        : Security Programs
type         : neo4j
height       : 800
labels       :
relationships:
gravity      : -800
#menu         : main
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
    Project:
        caption: key1
        color: "#1E90FF"
    IT_System:
        caption: summary
        image: https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Gnome-emblem-system.svg/2000px-Gnome-emblem-system.svg.png
    Programme:
        caption: summary
        #shape: square
        color: "#32CD32"
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
    is_fixed_by:
        arrow: true
        label:
    is_parent_of:
        arrow: false
        label:
    is_child_of:
        arrow: false
        label:
    relates_to:
        arrow: false
        label: 
---
 

{{< cypher-query height="80">}}
MATCH (a:Project)-[to]-(b:Programme)
where a.summary is not null and b.summary is not null and b.status<>'Done' and a.status<>'Done'
RETURN *
LIMIT 300
{{</ cypher-query >}}
