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
                <div key={i}>
                    <h3><Link to={`/cities/${post.city_id}/posts/${post.id}`}>{post.title} </Link></h3>
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
                        {postContent.reverse()}
                </PostContainer>
            </div>
        )
    }
}
