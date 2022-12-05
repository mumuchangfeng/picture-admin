<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <div class="source-path-list">
      <el-table :data="sourcePathDict" style="width: 100%">
      <el-table-column prop="id" label="id"></el-table-column>
      <el-table-column label="路径" width="500">
        <template v-slot="scope">
          <div>
            <router-link :to="{path: 'PictureDetail', query: {id: scope.row.id, source_picture_path: scope.row.source_picture_path}}">{{scope.row.source_picture_path}}</router-link>
          </div>
        </template>
      </el-table-column>
      <el-table-column prop="build_time" label="创建时间"></el-table-column>
      <el-table-column prop="extend_info" label="备注"></el-table-column>
    </el-table>
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
import {getSourcePathRequest} from '@/utils/PictureRequest.js'

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
    init() {
      this.getSourcePathList()
    },
    getSourcePathList: function () {
      let that = this
      getSourcePathRequest(that.sourcePicturePn, that.sourcePicturePs).then(response => {
          that.sourcePathDict = response.data.data.sourcePaths
          that.sourcePictureTotal = response.data.data.total
      })
    }
  },
  mounted() {
    this.init()
  },
  created () {
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
