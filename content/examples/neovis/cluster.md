---
title     : Example - Cluster
type      : neo4j
cypher    : MATCH (a)-[to]-(b) return * Limit 140
labels    :
relationships:
---

Here is an example of clustering nodes (click to expand)

<script>

function afterLoad() {
    neo.cluster_By_Group('RISK')
    //neo.viz._network.clusterOutliers()
    console.log(neo.viz._network.getNodesInCluster('cidCluster'))
}
</script>