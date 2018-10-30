import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPostForm from './NewPostForm';
import styled from 'styled-components'
import { Card, Button, Modal } from 'semantic-ui-react'

const Page = styled.div`
    margin: auto;
    background: #f1f1f1;
`

const CityPicture = styled.img`
    width: 100vw;
    padding-top: 60px;
    position: relative;
`
const Caption = styled.div`
    color: white;
    font-size: 50px;
    left: 0;
    position:absolute;
    text-align:center;
    top: 20px;
    width: 100%;
    font-family: 'Noto Sans', sans-serif;
    font-style: italic;
`

const CityName = styled.div`
    padding-left: 15px;
    padding-bottom: 15px;
    width: 100vw;
    display: block;
    justify-content: center;
    align-items: baseline;
    background: #f1f1f1;
`
const PostContainer = styled.div`
    width: 100vw;
    padding: 30px;
    background: #f1f1f1;
`
const StyledCard = styled(Card)`
    &&&{
        width: 600px;
    }
`

export default class SingleCity extends Component {
    state = {
        city: {},
        posts: [],
    }

    fetchData = async () => {
        const cityId = this.props.match.params.id
        const responseCity = await axios.get(`/api/cities/${cityId}`)
        const responsePost = await axios.get(`/api/cities/${cityId}/posts`)
        this.setState({
            posts: responsePost.data,
            city: responseCity.data
        })
    }

    async componentDidMount() {
        this.fetchData()
    }

    toggleShowNewPostForm = () => {
        this.setState({ showNewPostForm: !this.state.showNewPostForm })
    }

    addNewPost = async (newPost) => {
        const id = this.props.match.params.id
        await axios.post(`/api/cities/${id}/posts`, newPost)
        this.fetchData()
    }

    render() {
        const city = this.state.city

        const postContent = this.state.posts.map((post, i) => {
            return (


                <StyledCard key={i}>
                    <Card.Content href={`/cities/${post.city_id}/posts/${post.id}`}  header={post.title}/>
                    <Card.Content description={post.body} />
                </StyledCard>

            )
        })
        return (
            <Page>

                <div><CityPicture src={city.img} alt={city.name} /></div>
                <CityName>
                    <h1>{city.name}</h1>
                        <NewPostForm 
                        addNewPost={this.addNewPost}
                         /> 

                </CityName>
                <PostContainer>
                    {postContent.reverse()}
                </PostContainer>
            </Page>
            
        )
    }
}
