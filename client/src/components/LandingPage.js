import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Card, Image } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Link } from 'react-router-dom'

const StyledCarouselText = styled.div`
  font-weight: bold;
  font-style: italic;
  position: absolute;
  font-size:150px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0.8;
`
const StyledCarouselImage = styled.img`
 height: 50.5vw;
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

const StyledCardImage = styled(Image)`
  &&&{
    height: 115px;
  }
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
          <Link to={`/cities/${city.id}`}>
            <Card>
              <StyledCardImage src={city.img} />
              <Card.Content>
                <Card.Header>{city.name}</Card.Header>
              </Card.Content>
            </Card>
          </Link>
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
            <StyledCarouselImage src='https://i.imgur.com/ryX9LiT.jpg' />
          </div>
          <div>
            <StyledCarouselImage src="https://i.imgur.com/EwfNdxu.jpg" />
          </div>
          <div>
            <StyledCarouselImage src="https://i.imgur.com/vKlbMZD.jpg" />
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