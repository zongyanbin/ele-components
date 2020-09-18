<template>
  <div id="download-cp">
    <ul class="list-box" v-if="downList.length > 0">
      <li class="video-item" v-for="(item,index) in fileList" :key="index">
        <p class="video-item__title">
          {{item.fileName}}
        </p>
        <p class="video-item__opera">
          <el-button size="mini" type="primary" @click="downVideo(item.url)">点击下载</el-button>
          <el-button v-if="isPlay" size="mini" type="info" @click="showVideo(item.url)">播放</el-button>
        </p>
      </li>
    </ul>
    <el-dialog :visible.sync="dialogVideo" :close-on-click-modal="false">
      <video controls :src="videoUrl" width="100%" height="600px"></video>
    </el-dialog>
  </div>
</template>

<script>
/* eslint-disable */
import OSS from "ali-oss"
export default {
  name: "Download",
  props:{
    // 视频或附件数据
   downList: {
    type:Array,
    default: function () {
      return ["https://bucket-test-demo.oss-cn-beijing.aliyuncs.com/video/123.mp4","https://bucket-test-demo.oss-cn-beijing.aliyuncs.com/video/123.mp4"]
    }
   },
   // 是否显示播放按钮
   isPlay: {
    type:Boolean,
    default: true
   }
  },
  data () {
    return {
      client: null,
      loading: null,
      file: null,
      videoUrl: null,
      dialogVideo: false,
      fileList: []
    }
  },
  created () {
    // this.getClient()
  },
  mounted () {},
  methods: {
    // 开始动画
    startLoading () {
      this.loading = this.$loading({
        lock: true,
        text: '上传中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      })
    },
    // 结束动画
    endLoading(){
      this.loading.close()
    },
    // 获取 oss对象数据
    getClient () {
      let _this = this
      let result = null
      _this.startLoading()
      OSS.urllib.request('http://bucket-test-demo.oss-cn-beijing.aliyuncs.com/', { method: 'GET' }, (err, response) => {
        _this.endLoading()
        if (err) return _this.$message.error('网络错误！')
        try {
          result = JSON.parse(response)
        } catch (e) {
          result = null
          return _this.$message.error('网络错误！')
        }
         _this.client = new OSS({
		      region: 'oss-cn-beijing',
		      accessKeyId: '',
		      accessKeySecret: '',
		      bucket: 'bucket-test-demo',
		      secure: false
	    })
        _this.getBuffer()
      })
    },
    // 获取视屏播放和下载地址
    async getBuffer () {
      const len = this.downList.length 
      let downLoadLength = 0
      if(len <= 0) return false
      this.startLoading()
      for (let i = 0; i < len; i++) {
        try {
          downLoadLength++
          let result = await this.client.signatureUrl(this.downList[i]);
          let obj = {
            fileName: this.downList[i].split('/')[2],
            url: result
          }
          this.fileList.push(obj)
          if(downLoadLength === len){
             this.endLoading()
          }
        } catch (e) {
          this.endLoading()
          this.$message.error('网络错误，请稍后再试试！')
        }
      }
    },
    // 下载视频
    downVideo (url) {
      const a = document.createElement('a')
      a.setAttribute('download', 'aaa') 
      a.setAttribute('href', url) 
      a.click() 
    },
    // 播放视频
    showVideo (url) {
      this.dialogVideo = true
      this.videoUrl = url
    }
  }
};
</script>
<style>
#download-cp{
  .list-box,p,li{
    list-style: none;
    margin: 0;
    padding: 0 ;
  }
  li{
    margin-bottom: 15px;
  }
  .video-item{
    display: flex;
    flex-direction: row;
    &__title{
      width: 380px;
    }
  }
   
}
</style>