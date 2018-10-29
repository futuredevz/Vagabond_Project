import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewPostForm from './NewPostForm';

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
                <h1>{city.name}</h1>
                <div><img src={city.img} height={400} /></div>
                <div onClick={this.toggleShowNewPostForm}>Add New Post</div>
                {this.state.showNewPostForm ?
                    <NewPostForm
                    addNewPost = {this.addNewPost} /> : ''
                }
                {postContent}



            </div>
        )
    }
}
