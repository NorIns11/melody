/*import fetch from '@/utils/fetch'

export function getHot () {
  return fetch({
    url: '/hot',
    method: 'get'
  })
}

export function getBill () {
  return fetch({
    url: '/bill',
    method: 'get'
  })
}

export function getEuramerican () {
  return fetch({
    url: '/euramerican',
    method: 'get'
  })
}

export function getOnline () {
  return fetch({
    url: '/online',
    method: 'get'
  })
}

export function getPopular () {
  return fetch({
    url: '/popular',
    method: 'get'
  })
}

export function getRecommand () {
  return fetch({
    url: '/recommand',
    method: 'get'
  })
}

export function getLrc (songid) {
  return fetch({
    url: '/lyric',
    method: 'get',
    params: {
      songid
    }
  })
}
*/

import fetch from '@/utils/fetch'

const BASE_API = 'http://59.110.216.168:8080/melody';

export function getHot () {
  let url = BASE_API + '/hot'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getBill () {
  let url = BASE_API + '/bill'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getEuramerican () {
  let url = BASE_API + '/euramerican'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getOnline () {
  let url = BASE_API + '/online'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getPopular () {
  let url = BASE_API + '/popular'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getRecommand () {
  let url = BASE_API + '/recommand'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

export function getLrc (songid) {
  let url = BASE_API + '/lyric'
  let method = 'GET'
  let params = {
    songid
  }
  return fetch(url, method, params)
}
