import fetch from '@/utils/fetch'

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
