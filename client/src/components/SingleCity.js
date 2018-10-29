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
                <h1>{city.name}</h1>
                <div><img src={city.img} height={400} /></div>
                <div onClick={this.toggleShowNewPostForm}>Add New Post</div>
                {this.state.showNewPostForm ?
                    <NewPostForm
                    addNewPost = {this.addNewPost} /> : ''
                }
                {postContent.reverse()}



            </div>
        )
    }
}
