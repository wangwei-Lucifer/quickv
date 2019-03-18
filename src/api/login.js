import request from '@/scripts/request'

export function loginByUsername (username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function logout () {
  return request({
    url: '/logout',
    method: 'post'
  })
}

export function getUserInfo (id) {
  return request({
    url: '/user/' + id + '/info',
    method: 'get'
  })
}
