import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  /* border-bottom: 1px solid black; */
  background: grey;
  color: #f1f1f1;
  /* position: fixed; */
  top: 0;
  /* width: 100vw; */
`
const LeftBox = styled.div`
  font: 30px 'Noto Sans', sans-serif;
  font-weight: bold;
  font-style: italic;
  align-self: flex-start;
  padding-left: 20px;
`
const RightBox = styled(Link)`
&&&{
  font: 14px 'Noto Sans', sans-serif;
  align-self: center;
  padding-right: 20px;
  color:white;
}
  `

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <LeftBox>Vagabond</LeftBox>
        <RightBox to='/signin'>|Sign in|</RightBox>
      </Navbar>
    )
  }
}