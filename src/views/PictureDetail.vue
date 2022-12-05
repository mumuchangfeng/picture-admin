<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <el-breadcrumb separator="/">
  <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item>{{source_path_picture}}</el-breadcrumb-item>
  </el-breadcrumb>
    
    <div class="" id="box">
      <ul>
        <li v-for="picture in pictures" :key="picture.id">
          <img :src="picture.minio_url" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getPictureRequest} from '@/utils/PictureRequest.js'

export default {

  name: 'PictureDetail',
  data () {
    return {
      title: '图片预览',
      source_path_picture: this.$route.query.source_picture_path,
      source_path_picture_id: this.$route.query.id,
      pn: 1,
      ps: 100,
      pictures: null
    }
  },
  methods: {
    getPictures: function () {
      let that = this
      getPictureRequest(that.source_path_picture_id, that.pn, that.ps).then( response => {
        that.pictures = response.data.data
      }
      )
    },
    init() {
      this.getPictures()
    }
  },
  mounted() {
    this.init()
  },
  created () {
    }
}

</script>
<style>
#box ul{
		display: flex;
		flex-wrap: wrap;
        position: absolute;
        top: 220px;
	}
#box li{
		padding: 3px;
		list-style: none;
		margin-right: 15px;
		border: 1px solid #eee;
}
#box img{
		height: 150px;
    justify-content: space-around;
}

</style>