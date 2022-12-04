import request from '@/utils/request'

export function getImageList() {
  return request({
    url: '/images',
    method: 'get'
  })
}