import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { Link } from 'react-router-dom'
import { Button, Modal } from 'semantic-ui-react'
import EditPostForm from './EditPostForm';



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
        return response.data
    }

    handleDelete = async (postId) => {
        swal({
            title: `Are You Sure You want to Delete ${this.state.post.title} ?`,
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    swal('Success!', { icon: "success" })
                        .then(async () => {
                            const city_id = this.props.match.params.city_id
                            await axios.delete(`/api/cities/${city_id}/posts/${postId}`)
                            this.props.history.push(`/cities/${city_id}`)
                        })
                } else {
                    swal("Successfully Cancelled");
                }
            })
    }


    render() {
        const city = this.state.city
        const post = this.state.post
        return (
            <div>
                <h2>{city.name}</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                {/* <Button href = {`/cities/${city.id}/posts/${post.id}/edit`}>Edit </Button> */}
                <EditPostForm
                    cityId={this.props.match.params.city_id}
                    postId={this.props.match.params.id}
                    push={this.props.history.push}
                />
                <Button onClick={() => this.handleDelete(post.id)}>Delete</Button>
            </div>
        )
    }
}
