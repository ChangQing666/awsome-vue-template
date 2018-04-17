<template>
    <DateMonthPicker
        ref="DatePicker"
        @getType="getType"
        @getStartTime="getStartTime"
        @getEndTime="getEndTime">
    </DateMonthPicker>
</template>

<script>
  import DateMonthPicker from '../common/DateMonthPicker'
    export default {
        name: "date-page",
        components:{
          DateMonthPicker
        },
        data(){
          return{
            type: '',
            startTime: '',
            endTime: '',
          }
        },
        methods:{
          getType(type){
            this.type = type;
          },
          getStartTime(startTime){
            this.startTime = startTime;
          },
          getEndTime(endTime){
            this.endTime = endTime;
          },
        },
        mounted(){
          this.$refs['DatePicker'].set({
            startTime:this.startTime,
            endTime:this.endTime,
            type:this.type,
          })
        }
    }
</script>

<style scoped>

</style>
