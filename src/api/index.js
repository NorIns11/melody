import fetch from '@/utils/fetch'

// 获取机构列表
export function getSongList (suitAge, categoryKeyId, position, page, pageSize) { // 建议驼峰式命名
  return fetch({
    url: '/OperatorOrganizations/findOrganizationsBySuitAge', // API和URL合起来是一块
    method: 'post', // get方法对应的data写成params
    data: {
      suitAge,
      categoryKeyId,
      position,
      page,
      pageSize
    }
  })
}

// 获取排行榜列表1
export function getHotList1 (songName, singer, musicUrl) { // 建议驼峰式命名
  return fetch({
    url: '/OperatorOrganizations/findOrganizationsBySuitAge', // API和URL合起来是一块
    method: 'post', // get方法对应的data写成params
    data: {
      songName,
      singer,
      musicUrl
    }
  })
}

/**
 * 获取banner
 */
export function getBannerList (bannerType) {
  return fetch({
    url: '/Banner/showBannerBackStage',
    method: 'post',
    data: {
      bannerType
    }
  })
}
