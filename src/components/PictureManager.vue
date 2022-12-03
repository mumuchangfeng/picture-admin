<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="source-path-list">
      <el-table :data="sourcePathDict" style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column label="路径" width="500">
        <template v-slot="scope">
            <a href="https://www.baidu.com">{{ scope.row.source_picture_path }}</a>
        </template>
      </el-table-column>
      <el-table-column prop="build_time" label="创建时间"></el-table-column>
      <el-table-column prop="extend_info" label="备注"></el-table-column>
    </el-table>
    <span class="demonstration">显示总数</span>
    <el-pagination
      @current-change="getSourcePathList"  :page-size="sourcePicturePs"
      layout="total, prev, pager, next" :total="sourcePictureTotal"
      flex="1"
      display="flex"
      align-items="center"
      justify-content="flex-end"
      >
    </el-pagination>
    </div>
  </div>

</template>

<script>
import {getPictureList, getSourcePathRequest} from '@/utils/PictureRequest.js'
// import axios from 'axios'

export default {

  name: 'PictureManager',
  data () {
    return {
      title: '图片预览',
      pictures: null,
      picturePn: 1,
      picturePs: 1000,
      sourcePicturePathId: 1,
      sourcePicturePn: 1,
      sourcePicturePs: 5,
      sourcePictureTotal: 0,
      handleCurrentChange: 1,
      sourcePathDict: null
    }
  },
  methods: {
    getPicture: async function () {
      // 获取图片查询
      let that = this
      await getPictureList(that.sourcePicturePathId, that.picturePn, that.picturePs).then(data => {
        that.pictures = data
      })
    },

    init() {
      console.log("1234")
      this.getPictures()
    },

    getPictures() {

      // axios({
      //   'method': 'get',
      //   'url': '/images',
      // }).then( (response) => {
      //     // data = response.data.data
      //     console.log(response)
      // })
      this.$request({
        method: 'get',
        url: '/images',
      }).then(res => {
        console.log(res)
        this.sourcePathDict = res.data['images']
      })
    },
    reset: function () {
      // 重置查询页数
      this.pn = 1
      this.pictures = []
    },
    getSourcePathList: async function () {
      let that = this
      await getSourcePathRequest(that.sourcePicturePn, that.sourcePicturePs).then(data => {
          that.sourcePathDict = data.sourcePaths
          that.sourcePictureTotal = data.total
          console.log(that.sourcePathDict)
      })
    }
  },
  mounted() {
    this.init()
    // this.getSourcePathList()
  },
  created () {
      // 页面初始化时就获取源文件
      // this.getSourcePathList()
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
