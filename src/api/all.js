import fetch from '@/utils/fetch'

const BASE_API = 'http://59.110.216.168:8080/melody10';

/**
*
*
*获取榜
1:新歌榜 2：热歌榜 11：摇滚榜 12：爵士 16：流行 21：欧美金曲榜 
22：经典老歌榜 23：情歌对唱榜 24：影视金曲榜 25：网络歌曲榜
**/
export function getRank (typeId,num) {
  let url = BASE_API + '/billboard'
  let method = 'GET'
  let params = {
    typeId,
    num
  }
  return fetch(url, method, params)
}


/**
*推荐
*无入参（只有三首）
*/
// 带参版
// export function getRecommend (songid) {
//   let url = BASE_API + '/recommend'
//   let method = 'GET'
//   let params = {
//     songid
//   }
//   return fetch(url, method, params)
// }
export function getRecommend () {
  let url = BASE_API + '/recommend'
  let method = 'GET'
  let params = {

  }
  return fetch(url, method, params)
}

/**
*搜索音乐
*/
export function searchByKey (key) {
  let url = BASE_API + '/search'
  let method = 'GET'
  let params = {
    key
  }
  return fetch(url, method, params)
}

/*
获取歌词
*/
export function getLrc (songId) {
  let url = BASE_API + '/lyric'
  let method = 'GET'
  let params = {
    songId
  }
  return fetch(url, method, params)
}

/*
播放音乐
*/
export function playMusic (songId) {
  let url = BASE_API + '/play'
  let method = 'GET'
  let params = {
    songId
  }
  return fetch(url, method, params)
}