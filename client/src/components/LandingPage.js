import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Grid, Card, Image, GridColumn } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

<<<<<<< HEAD
const StyledBackground = styled.div`
  /* ('https://i.imgur.com/PMSkWN5.jpg'); */
  background: grey;

`
const StyledWelcome = styled.div`

`
=======
const CarouselContainer = styled.div`
  padding: 40px;
  height: 200px;
  align-items: center;
  margin: auto;
  margin-bottom: 300px;
  text-align: center;
`
const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background: #f1f1f1;
  height: 93vh;
`
const StyledGrid = styled(Grid)`
  &&&{
    margin: auto;
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
>>>>>>> 82b562fdb68cdc82fdfc05a53d3a9df90b2cf98e

  render() {
    const citiesList = this.state.cities.map((city, i) => {
      return (
        // <Link key={i} to={`cities/${city.id}`}>{city.name}</Link>
        <GridColumn key={i}>
        <Card href={`cities/${city.id}`}>
        <Image src={city.img} />
        <Card.Content>
          <Card.Header>{city.name}</Card.Header>
        </Card.Content>
        </Card>
        </GridColumn>
      )
    })
    return (
<<<<<<< HEAD
      <StyledBackground>
        yeee
      </StyledBackground>
=======
    
      <Page>
        <CarouselContainer>
          <Carousel showThumbs={false} width={800} autoPlay={true} interval={5000} infiniteLoop={true} transitionTime={1000}>
            <div>
              <img src='https://www.visitmacysusa.com/sites/default/files/styles/hero/public/macys-los-angeles-skyline-at-night-header.jpg?itok=FTikBOPJ' />
              <p className="legend"> Los Angeles</p>
            </div>
            <div>
              <img src="https://xixerone.com/en/wp-content/uploads/sites/2/2017/09/Best-areas-to-stay-in-Dallas-Texas.jpg" />
              <p className="legend">Dallas</p>
            </div>
            <div>
              <img src="https://i.imgur.com/PMSkWN5.jpg" />
              <p className="legend">Atlanta</p>
            </div>
          </Carousel>
        </CarouselContainer>

        <StyledGrid columns='equal'>
          <Grid.Row>
              {citiesList}
          </Grid.Row>
        </StyledGrid>
      </Page>
       
>>>>>>> 82b562fdb68cdc82fdfc05a53d3a9df90b2cf98e
    )
  }
}