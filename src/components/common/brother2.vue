<template>
    <div style="background:#e9e9e9;">
      <h2>兄弟组件2</h2>
      <button @click="fromBro1">bus将bro1传递给bro2</button>
      <h4>
        {{bro2Val}}
      </h4>
      <h4 style="color:#f60;">主动触发获取bro1的值：{{bro2Val}}</h4>
    </div>
</template>

<script>
    import Bus from '@/components/common/bus.js'
    export default {
        name: "brother1",
        data(){
          return{
            bro2Val:''
          }
        },
        methods:{
            fromBro1(){
              let v =this;
              console.log('_____')
              Bus.$on('trans',function(val){
                console.log(2,val)
                v.bro2Val = val;
              })
            }
        },
        mounted(){
          let v = this;
          Bus.$on('trans',function(val){
            v.bro2Val = val;
          })
        }

    }
</script>

<style scoped>

</style>
