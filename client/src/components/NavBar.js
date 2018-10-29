import React, { Component } from 'react'
import styled from 'styled-components'

const Navbar = styled.div`
  display: flex;
  justify-content: center;
  font: 56px 'Damion', cursive;;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid black;
`

export default class NavBar extends Component {
  render() {
    return (
      <Navbar>
        Vagabond
      </Navbar>
    )
  }
}
