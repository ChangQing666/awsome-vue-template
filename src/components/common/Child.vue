<template>
  <div>
    <hr>
    <h2>子组件</h2>
    <h5>父组件prop静态传值:{{this.parentPropMsg}}</h5>
    <h5>父组件prop动态传值: {{this.parentProp}}</h5>
    <input type="text" v-model="transToParentVal" placeholder="请输入需要传递给父组件的值" style="color:#09f;font-weight:700;"><br>
    <label>子组件传递给父组件的值：</label><span style="color:#09f;font-weight:700;">{{transToParentVal}}</span><br>
    <label>通过事件将子组件的值传递给父组件：</label><button @click="toTransToParent">子组件主动传值给父组件</button>
    <h6 style="color:#f88;font-weight:700;">这是来自父组件的值：{{fromParentVal}}</h6>
    <hr>
  </div>
</template>

<script>
    export default {
        name: "Child",
        props:['parentPropMsg','parentProp'],
        data(){
          return{
            transToParentVal:'',
            fromParentVal:'',
          }
        },
        computed:{

        },
        methods:{
          toTransToParent(){
            this.$emit('getChildVal',this.transToParentVal)
          },
          get(){
            return this.transToParentVal;
          },
          set(val){
            this.fromParentVal = val;
          }
        },
        created(){

        },
        mounted(){

        }
    }
</script>

<style scoped>

</style>
