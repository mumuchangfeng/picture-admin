<template>
    <div class="demo-image">
      <div v-for="image in pictures" :key="image.source_picture_path" class="block">
        <el-image style="width: 250px; height: 250px" :src="image.source_picture_path" fit="cover" />
      </div>
    </div>
</template>
  
<script>
import {getImageList} from '@/api/images.js'
    

export default {
    name: "ImageView",

    data: () => ({
        pictures: []
    }),
    methods: {
        init() {
            getImageList().then(res => {
                console.log(res)
                this.pictures = res.data['images']
            })
        }
    },
    mounted() {
        this.init()
    }
}
</script>

<style scoped>
.demo-image .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1px var(--el-border-color);
    display: inline-block;
    width: 20%;
    box-sizing: border-box;
    vertical-align: top;
}
.demo-image .block:last-child {
    border-right: none;
}
.demo-image .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
}
</style>
  