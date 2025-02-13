import React from 'react'
import styled from 'styled-components'
import type { CommonType } from '@/app/global/types/StyledType'
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from 'react-icons/md'

const StyledForm = styled.form<CommonType>``

const SearchForm = ({ form, onChange, onClick, onSubmit }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <dl>
        <dt>검색기준</dt>
        <dd>
          <span onClick={() => onClick('mode', 'current')}>
            {form?.mode === 'current' ? (
              <MdRadioButtonChecked />
            ) : (
              <MdRadioButtonUnchecked />
            )}
            현재 위치
          </span>
          <span onClick={() => onClick('mode', 'address')}>
            {form?.mode === 'current' ? (
              <MdRadioButtonUnchecked />
            ) : (
              <MdRadioButtonChecked />
            )}
            지역 검색
          </span>
        </dd>
      </dl>
    </StyledForm>
  )
}

export default React.memo(SearchForm)
