'use server'
import apiRequest from '@/app/global/libs/apiRequest'
import { toQueryString } from '@/app/global/libs/utils'

export const getCategories = async () => {
  const apiUrl = process.env.RESTAURANT_URL + '/category'
  const res = await apiRequest(apiUrl)
  if (res.status === 200) {
    return await res.json()
  }

  return []
}

export const getList = async (search) => {
  const mode = search.mode
  if (mode === 'current') {
    // 위치 기반이라면 주변 식당이므로  sido, sigugun 검색은 불필요
    delete search.sido
    delete search.sigugun
  }
}
