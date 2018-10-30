import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { Button, Modal } from 'semantic-ui-react'
import EditPostForm from './EditPostForm';
import styled from 'styled-components'

const SinglePostContainer = styled.div`
   padding: 100px;
`


export default class SinglePost extends Component {
    state = {
        city: {},
        post: {}
    }

    async componentDidMount() {
        this.fetchData()
    }

    fetchData= async () => {
        const city_id = this.props.match.params.city_id
        const post_id = this.props.match.params.id
        const responseCity = await axios.get(`/api/cities/${city_id}`)
        const responsePost = await axios.get(`/api/cities/${city_id}/posts/${post_id}`)
        this.setState({ city: responseCity.data, post: responsePost.data })

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
            <SinglePostContainer>
                <h2>{city.name}</h2>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <EditPostForm
                    cityId={this.props.match.params.city_id}
                    postId={this.props.match.params.id}
                    push={this.props.history.push}
                    fetchData={this.fetchData()}
                />
                <Button onClick={() => this.handleDelete(post.id)}>Delete</Button>
            </SinglePostContainer>
        )
    }
}