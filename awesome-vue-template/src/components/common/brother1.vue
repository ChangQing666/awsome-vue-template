<template>
    <div style="background:#e9e9e9;">
      <h2>兄弟组件1</h2>
      <input type="text" v-model="bro1Val">
      <button @click="tobro2">bus将bro1传递给bro2</button>
    </div>
</template>

<script>
    import Bus from '@/components/common/bus.js'
    export default {
        name: "brother1",
        data(){
          return{
            bro1Val:'这是来自brother1的数据abc'
          }
        },
        methods:{
            tobro2(){
              Bus.$emit('trans',this.bro1Val)
            }
        },
      mounted(){
        Bus.$emit('trans',this.bro1Val)
      }

    }
</script>

<style scoped>

</style>
