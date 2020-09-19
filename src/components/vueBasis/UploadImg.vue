<template>
    <div id="uploadimg">
        <el-upload
            action="''"
            list-type="picture-card"
            :http-request="uploadpic"
            :before-upload="beforeAvatarUpload"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
            :file-list="showlist"
            >
            <i class="el-icon-plus"></i>
        </el-upload>
        <el-image-viewer v-if="showViewer" :on-close="closeViewer" :url-list="picList" />
    </div>
</template>
<script>
//element-ui  upload修改预览功能，需安装element-ui
//说明：
//  uploadpic：父组件传入upload方法
//  list：父组件传入图片列表
//  limit：父组件传入图片大小限制
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'
export default {
    name: 'uploadimg',
    components: { ElImageViewer },
    props: ['list','uploadpic','limit'],
    data() {
        return {
            showViewer: false,
            showlist: [],
            picList: []
        }
    },
    created() {
        this.getimgdata()
    },
    methods: {
        //获取图片列表
        getimgdata() {
            this.showlist = this.list
            for(let i in this.showlist) {
                this.picList.push(this.showlist[i].url)
            }
        },
        //点击预览图片
        handlePictureCardPreview(file) {
            this.showViewer = true
            let i = 0
            for(i=0;i<this.showlist.length;i++) {
                if(this.picList[i] == file.url)
                    break
            }
            for(let j=0;j<i;j++) {
                this.picList.push(this.picList[j])
            }
            this.picList.splice(0,i)
        },
        //删除上传图片
        handleRemove(file, fileList) {
            // this.list = fileList
            this.$emit('update:list',fileList)
            this.showlist = fileList
            this.picList = []
            for(let i in this.showlist) {
                this.picList.push(this.showlist[i].url)
            }
        },
        //关闭预览图片
        closeViewer() {
            this.showViewer = false
        },
        beforeAvatarUpload(file) {
            let isLt = file.size / 1024 / 1024 < this.limit
            if (!isLt) {
                this.$message.error('上传头像图片大小不能超过'+this.limit+'MB!')
            }
            return isLt
        },
    },
    watch: {
        //监听父组件图片列表的变化
        list(val) {
            this.showlist = val
            this.picList = []
            for(let i in this.showlist) {
                this.picList.push(this.showlist[i].url)
            }
        }
    }
}
</script>
<style scoped>

</style>