<template>
  <div class="wrapper">
    <vSelect v-model="selected" :option="options" :placement="placement"></vSelect>
  </div>
</template>

<script>
import vSelect from 'vselect-component'

export default {
  name: "eventSelector",
  components: {
      vSelect
  },
  data () {
    return {
      index: 1,
      options: [{
          value:1, 
          label:'option1'
      },{
          value:2,
          label:'option2'
      }],
      selected:{
          value:1,
          label:'option1'
      },
      placement:'down'
    }
  }
};
</script>

<style>
</style>