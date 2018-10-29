import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPostForm from './NewPostForm';
import styled from 'styled-components'

const CityPicture = styled.img`
    width: 100vw;
`

const CityName = styled.div`
    padding-left: 15px;
    width: 100vw;
    display: block;
    justify-content: center;
    align-items: baseline;
`
const PostContainer = styled.div`
    width: 100vw;
    height: 14vh;
    padding: 30px;
    overflow: scroll;
`

export default class SingleCity extends Component {
    state = {
        city: {},
        posts: [],
        showNewPostForm: false
    }

    async componentDidMount() {
        const cityId = this.props.match.params.id

        const city = await this.fetchOneCity(cityId)
        const posts = await this.fetchPosts(cityId)

        this.setState({ city, posts })
    }

    fetchOneCity = async (id) => {
        const response = await axios.get(`/api/cities/${id}`)
        return response.data
    }

    fetchPosts = async (id) => {
        const response = await axios.get(`/api/cities/${id}/posts`)
        return response.data
    }

    toggleShowNewPostForm = () => {
        this.setState({ showNewPostForm: !this.state.showNewPostForm })
    }

    addNewPost = async (newPost) => {
        const id = this.props.match.params.id
        await axios.post(`/api/cities/${id}/posts`, newPost)
        
    }


    render() {
        const city = this.state.city

        const postContent = this.state.posts.map((post, i) => {
            return (
                <div key={i}>
                    <h3><Link to={`posts/${post.id}`}>{post.title} </Link></h3>
                    <p>{post.body}</p>
                </div>
            )
        })
        return (
            <div>
                <div><CityPicture src={city.img} alt={city.name} height={400}/></div>
                <CityName>
                    <h1>{city.name}</h1> 
                        <div onClick={this.toggleShowNewPostForm}>Add New Post</div>
                            {this.state.showNewPostForm ?
                            <NewPostForm
                            addNewPost = {this.addNewPost} /> : ''
                            }
                </CityName>
                <PostContainer>
                    
                    
                        {postContent}


                </PostContainer>
            </div>
        )
    }
}
