import request from  '@/utils/request'

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
    return request({
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
}
