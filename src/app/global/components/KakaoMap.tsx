'use client'
import React, { useRef, useEffect } from 'react'

const KakaoMap = () => {
  const mapRef = useRef<any>(undefined)

  useEffect(() => {
    if (mapRef) {
      const mapContainer = mapRef.current

      const mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      }

      const map = new kakao.maps.Map(mapContainer, mapOption)
    }
  }, [mapRef])

  return <div ref={mapRef} style={{ height: 350 }}></div>
}

export default React.memo(KakaoMap)
