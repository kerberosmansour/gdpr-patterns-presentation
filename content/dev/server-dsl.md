---
title      : Server DSL
type       : neo4j
height     : 350
hide_graph : true
#menu       : main
weight     : 8
labels     :
relationships:
---

Here you can run commands using the NeoJira DSL (Domain Specific Language)

API:

- ```return @.neo4j.nodes_Count()```
- ```return @.neo4j.nodes_Keys()```
- ```return @.neo4j.add_node "AN_LABEL","an_key"```
- ```return @.neo4j.delete_all_nodes()```

{{< repl-dsl height="350">}}
return 40+2
{{</ repl-dsl >}}


<script>
    $('#card-code'    ).parent().attr('class','col-6')
    $('#card-response').parent().attr('class','col-6')
</script>

### Other examples

**Using promise to run query and filter result**

<textarea style="width:500px;height:80px">
    return new Promise (resolve)=>
        result = @.neo4j.run_Cypher "MATCH (a) RETURN count(a)"
        result.then (data)->
            resolve(data.records[0]._fields[0].low)
</textarea>

**Add node**

<textarea style="width:500px;height:50px">
    return new Promise (resolve)=>
        await @.neo4j.add_node("NEW_LABEL3","qweaaa")
        resolve('done 132')
</textarea>

**Risks by owner**

<textarea style="width:500px;height:100px">
    results = {}
    for key,value of @.jira.risks()
      if value['Risk Owner']
        results[value['Risk Owner']]?= 0
        results[value['Risk Owner']]++
    return results
</textarea>

**Adding two nodes (via promise)**

<textarea style="width:500px;height:100px">
return new Promise (resolve)=>
    console.log await @.neo4j.nodes_Count()
    await @.neo4j.delete_all_nodes()
    await @.neo4j.add_node("NEW_LABEL3","qweaaa")
    await @.neo4j.add_node("NEW_LABEL1","qweaaa")
    console.log('after')
    console.log await @.neo4j.nodes_Count()
    resolve('all done')
</textarea>

<style>
    ul { font-size: 10px}
    p  { margin : 0px   }
</style>