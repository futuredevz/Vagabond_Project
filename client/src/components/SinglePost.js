import React, { Component } from 'react'
import axios from 'axios'


export default class SinglePost extends Component {
    state = {
        city: {},
        post: {}
    }

    async componentDidMount() {
        const city_id = this.props.match.params.city_id

        const city = await this.fetchOneCity(city_id)
        const post = await this.fetchOnePost(city_id)

        this.setState({ city, post })
    }

    fetchOneCity = async () => {
        const city_id = this.props.match.params.city_id
        const response = await axios.get(`/api/cities/${city_id}`)
        return response.data
        
    }
    fetchOnePost = async () => {
        const city_id = this.props.match.params.city_id
        const post_id = this.props.match.params.id

        const response = await axios.get(`/api/cities/${city_id}/posts/${post_id}`)
        console.log(response)
        return response.data
        
    }

    render() {
        const city = this.state.city
        const post = this.state.post
        return (
            <div>
                <h2>{city.name}</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>

            </div>
        )
    }
}
