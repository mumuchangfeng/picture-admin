import request from  '@/utils/request'

export function getPictureList (sourcePicturePathId, pn, ps) {
    // 获取图片数据
    var pictures = null
    getPictureRequest(sourcePicturePathId, pn, ps).then(data => {
        pictures = data
      })
    // 拼接图片地址
    for (let item in pictures) {
        pictures[item]['preview_abs_path'] = 'http://127.0.0.1:5000/picture' + 'photo?path=' + pictures[item]['preview_path'] + pictures[item]['preview_name']
    }
    return pictures
}

export function getSourcePathRequest (pn, ps) {
    return request({
        'method': 'post',
        'url': '/picture/query_source',
        'headers': {
            'Content-Type': 'multipart/form-data'
          },
        'data': {
            'pn': pn,
            'ps': ps
          }
      })
}

export function getPictureRequest (sourcePicturePathId, pn, ps) {
    // 请求服务端图片信息
    let data
    request({
        'method': 'post',
        'url': '/picture/query',
        'headers': {
          'Content-Type': 'multipart/form-data'
        },
        'data': {
          'pn': pn,
          'ps': ps,
          'sourcePicturePathId': sourcePicturePathId
        }
      })
        .then(function (response) {
            data = response.data.data
        })
        .catch(function (error) {
            console.log(error)
            data = null
        })
    return data
}
