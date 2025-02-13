import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'
import { FaMapMarkerAlt } from 'react-icons/fa'

const StyledUl = styled.ul<CommonType>``

const ListItem = ({ item, onClick }) => {
  const { seq, category, address, name, latitude, longitude } = item
  return (
    <li>
      <div className="top">
        <span className="badge">{category}</span>
        <span className="name">{name}</span>
      </div>
      <div className="address">{address}</div>
      <FaMapMarkerAlt onClick={() => onClick(latitude, longitude)} />
    </li>
  )
}

const RestaurantItems = ({ items }) => {
  return <StyledUl></StyledUl>
}

export default React.memo(RestaurantItems)
