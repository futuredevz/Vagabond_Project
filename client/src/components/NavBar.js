import React, { Component } from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`
const LeftBox = styled.div`
  font: 56px 'Noto Sans', sans-serif;
  font-weight: bold;
  font-style: italic;
  align-self: flex-start;
  padding-left: 20px;
`
const RightBox = styled.div`
  font: 32px 'Noto Sans', sans-serif;
  align-self: flex-end;
  padding-right: 20px;
`


export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <LeftBox>Vagabond</LeftBox>
        <RightBox> Sign In</RightBox>
      </Navbar>
    )
  }
}
