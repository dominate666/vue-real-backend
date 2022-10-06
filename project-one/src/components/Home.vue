<template>
   <div>
    <div id="hello" style="height:500px">
   </div>
   </div>
</template>
<script>
  export default {
     data(){
      return {
        menu:[]
      }
     },
     mounted(){
        let container=document.getElementById("hello")
        let mychart=this.$echarts.init(container)
        mychart.setOption({
          title:{
            text:"",
            left:'center'
          },
          tooltip:'',
          legend:{
            type:'scroll',
            orient:'vertical',
            data:['技术总监']
          },
          xAxis:{
            type:"category",
            data:['一','二','三','四','五']
          },
          yAxis:{
            type:'value'
          },
          series:[
            {
              name:"技术总监",
              type:'line',
              radius:'50%',
              data:[60,20,30,80,50]
            },
           
          ]

        })
     }
  }
</script>
<style lang="less">
 .hello{
    background: yellow;
    .el-button{
      color: lime;
    }
 }

</style>