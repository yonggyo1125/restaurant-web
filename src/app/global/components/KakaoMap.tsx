'use client'
import React, { useRef, useEffect } from 'react'

const KakaoMap = ({ center, locations }) => {
  const mapRef = useRef<any>(undefined)

  useEffect(() => {
    if (mapRef) {
      const mapContainer = mapRef.current, // 지도를 표시할 div
        mapOption = {
          center: new window.kakao.maps.LatLng(center.lat, center.lon), // 지도의 중심좌표
          level: 3, // 지도의 확대 레벨
        }

      const map = new window.kakao.maps.Map(mapContainer, mapOption) // 지도를 생성합니다
      /*
      const locations = [
        {
          lat: 33.450701,
          lon: 126.570667,
          category: '한식',
          name: '식당명',
          address: '주소',
        },
      ]
      */

      for (const loc of locations) {
        const position = new window.kakao.maps.LatLng(loc.lat, loc.lon)
        const marker = new window.kakao.maps.Marker({
          position,
        })

        marker.setMap(map)

        const windowHTML = `<div class='info-window'>
          <div class='row'>식당종류: ${loc.category}</div>
          <div class='row'>식당이름: ${loc.name}</div>
          <div class='row'>식당주소: ${loc.address}</div>
          <span>[X]</span>
        </div>`

        const infoWindow = new window.kakao.maps.InfoWindow({
          position,
          content: windowHTML,
        })

        window.kakao.maps.event.addListener(marker, 'click', function () {
          infoWindow.open(map, marker)
        })
      }
    }
  }, [mapRef, locations])

  return <div ref={mapRef} style={{ height: 350 }}></div>
}

export default React.memo(KakaoMap)
