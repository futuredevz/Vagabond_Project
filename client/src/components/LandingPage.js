import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

const StyledCarouselText = styled.div`
  font-weight: bold;
  font-style: italic;
  position: absolute;
  font-size:150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0.3;
`
const StyledCarouselImage = styled.img`
 height: 50vw;
 background-color:black;
`

const Page = styled.div`
  background: #f1f1f1;
`
const StyledCitiesList = styled.div`
  padding-top:100px;
  padding-bottom:50px;
  display:flex;
  justify-content: space-evenly;
`

export default class LandingPage extends Component {
  state = {
    cities: []
  }

  componentDidMount = async () => {
    await this.fetchCities()
  }

  fetchCities = async () => {
    const response = await axios.get('api/cities')
    this.setState({ cities: response.data })
  }

  render() {
    const citiesList = this.state.cities.map((city, i) => {
      return (
        <div key={i}>
        <Card href={`cities/${city.id}`}>
        <Image src={city.img} />
        <Card.Content>
          <Card.Header>{city.name}</Card.Header>
        </Card.Content>
        </Card>
        </div>
      )
    })
    return (
    
      <Page>
          <Carousel dynamicHeight={true} autoPlay={true} showThumbs={false} showIndicators={false} showStatus={false} interval={8000} infiniteLoop={true} transitionTime={2000}>
            <div>
              <StyledCarouselImage></StyledCarouselImage>
            </div>
            <div>
              <StyledCarouselImage src='https://www.visitmacysusa.com/sites/default/files/styles/hero/public/macys-los-angeles-skyline-at-night-header.jpg?itok=FTikBOPJ' />
            </div>
            <div>
              <StyledCarouselImage src="https://xixerone.com/en/wp-content/uploads/sites/2/2017/09/Best-areas-to-stay-in-Dallas-Texas.jpg" />
            </div>
            <div>
              <StyledCarouselImage src="https://i.imgur.com/PMSkWN5.jpg" />
            </div>
          </Carousel>
          <StyledCarouselText>Vagabond</StyledCarouselText>       
       
        <StyledCitiesList>
          {citiesList}
        </StyledCitiesList>
      </Page>
       
    )
  }
}