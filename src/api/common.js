import request from '@/utils/request'

export function processDeploy(file) {
  return request({
    url: '/process/feign/dep',
    method: 'put',
    headers: { 'content-type': 'multipart/form-data' },
    data: file
  })
}