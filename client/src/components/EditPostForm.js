import React, { Component } from 'react'
import axios from 'axios'

export default class EditPostForm extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const post = { ...this.state.post}
        post[event.target.name] = event.target.value
        this.setState({ post })
    }

    handleSubmit = async (event) => {
        const cityId = this.props.match.params.city_id
        const postId = this.props.match.params.id
        event.preventDefault()
        await axios.put(`/api/cities/${cityId}/posts/${postId}`, this.state.post)
        this.props.history.push(`/cities/${cityId}/posts/${postId}`)
      }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='title'
                        value={this.state.post.title}
                        onChange={this.handleChange}
                    />
                    <input type='text' name='body'
                        value={this.state.post.body}
                        onChange={this.handleChange}
                    />
                    <input type='submit' value='Update Post' />
                </form>
            </div>
        )
    }
}
