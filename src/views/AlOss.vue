<template>
  <div>
    <el-upload
      class="avatar-uploader"
      action=""
      :http-request="beginUpload"
      :show-file-list="false">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-progress :percentage="Number(percentage.toFixed(2))"></el-progress>
    <el-button @click="pauseUpload">暂停</el-button>
    <el-button @click="goonUpload">继续</el-button>
  </div>
</template>
<script>
import OSS from 'ali-oss'
export default {
  components: {},
  data () {
    return {
      imageUrl: '',
      percentage: 0,
      checkpoint: null,
      client: null,
      filename: ''
    }
  },
  computed: {
  },
  created () {
    this.client = new OSS({
      region:'oss-cn-beijing',
      accessKeyId:'',
      accessKeySecret:'',
      bucket:'bucket-test-demo',
      secure:false
    })
  },
  methods: {
    async ossUpload (filename, file) {
      let _this = this
      try {
        let result = await _this.client.multipartUpload(filename, file, {
          progress: async function (p, checkpoint) {
            _this.checkpoint = checkpoint
            _this.percentage = p * 100
          },
          checkpoint: _this.checkpoint
        })
        console.log(result)
      } catch (e) {
        console.log(e)
      }
    },
    beginUpload (file) {
      let _this = this
      let filename = file.file.name
      filename = filename.split('.')[0] + '_' + new Date().getTime() + '.' + filename.split('.')[1]
      _this.file = file
      _this.filename = filename
      _this.ossUpload(filename, file.file)
    },
    pauseUpload () {
      this.client.cancel()
    },
    goonUpload () {
      let file = this.file
      let _this = this
      _this.ossUpload(_this.filename, file.file)
    }
  }
}
</script>
