---
title     : Example - Cluster
type      : neo4j
cypher    : MATCH (a:Project)-[to]-(b:Programme) where a.summary is not null and b.summary is not null RETURN * LIMIT 300
labels    :
relationships:
---

Here is an example of clustering nodes (click to expand)

<script>

function afterLoad() {
    
    neo.cluster_By_Group('Programme')
    neo.cluster_By_Group('Project')
    //neo.viz._network.clusterOutliers()
    console.log(neo.viz._network.getNodesInCluster('cidCluster'))
}
</script>