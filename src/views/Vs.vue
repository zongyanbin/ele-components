<template>
  <div class="hello">
    <uploadimg :list.sync="list" :uploadpic="uploadpic" :limit="limit" />
  </div>
</template>

<script>
//组件位置根据自己情况修改
import uploadimg from '../components/vueBasis/UploadImg'//
const OSS = require('ali-oss');
var client = new OSS({
  //以下请输入自己的配置
      region:'oss-cn-beijing',
      accessKeyId:'',
      accessKeySecret:'',
      bucket:'bucket-test-demo',
      secure:false
});

export default {
  name: 'HelloWorld',
  components: { uploadimg },
  data () {
    return {
      list:[],
      limit: 10
    }
  },
  methods: {
    uploadpic(file) {
      client.put(file.file.name,file.file).then((res) => {
        this.list.push({url:res.url})
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>
