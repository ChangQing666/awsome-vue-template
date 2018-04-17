<template>
  <el-form inline style="display:inline-block">
    <el-form-item label="周期统计：">
      <el-select v-model="type" @change="getType" style="width:150px;">
        <el-option v-for="item in staticCycleList" :value="item.value" :key="item.value">{{ item.label }}</el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="统计时间：">
      <el-date-picker :value="startTime"   @change="getStartTime" :type="dtype" :format="dformat"  :disabledDate="disabledStartOptions" placeholder="起始日期" style="width: 215px"></el-date-picker>
      -
      <el-date-picker :value="endTime"  @change="getEndTime" :type="dtype" :format="dformat"  :disabledDate="disabledEndOptions"  placeholder="截止日期" style="width: 215px"></el-date-picker>
    </el-form-item>
  </el-form>
</template>
<script>
  import moment from 'moment';
  export default{
    data(){
      return{
        staticCycleList:[
          {
            value:'0',
            label:'天'
          },
          {
            value:'1',
            label:'月'
          }
        ],
        type:'0',
        startTime:'',
        endTime:'',
        _startTime:'',
        _endTime:'',
      }
    },
    computed:{
      dtype(){
        return this.type=='0'?'date':'month'
      },
      dformat(){
        return this.type=='0'?'yyyy-MM-dd':'yyyy-MM'
      },
      disabledStartOptions(){
        let v =this
        return{
          disabledDate (date) {
            return date && date.valueOf() > new Date(v.endTime).valueOf();
          }
        }
      },
      disabledEndOptions(){
        let v =this
        return{
          disabledDate (date) {
            return date && date.valueOf() < new Date(v.startTime).valueOf()-86400000;
          }
        }
      },
    },
    methods:{
      getType(){
        if(this.type==0){
          this.startTime=moment(this.startTime).format('YYYY-MM-DD');
          this.endTime=moment(this.startTime).format('YYYY-MM-DD');
        }else{
          this.startTime=moment(this.startTime).format('YYYY-MM');
          this.endTime=moment(this.startTime).format('YYYY-MM');
        }
        this.$emit('getType',this.type);
        this.$emit('getStartTime',this.startTime);
        this.$emit('getEndTime',this.endTime)
      },
      getStartTime(startTime){
        this.startTime = startTime;
        this.$emit('getStartTime',this.startTime);
      },
      getEndTime(endTime){
        this.endTime = endTime;
        this.$emit('getEndTime',this.endTime)
      },
      set(obj){
        this.startTime = obj.startTime;
        this.endTime = obj.endTime;
        this.type = obj.type;
      }
    },
    mounted(){
      this.startTime = moment().subtract(1,'days').format('YYYY-MM-DD');
      this.endTime = moment().subtract(1,'days').format('YYYY-MM-DD');
      this.$emit('getStartTime',this.startTime);
      this.$emit('getEndTime',this.endTime)
    }
  }
</script>
