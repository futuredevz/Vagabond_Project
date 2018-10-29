import React, { Component } from 'react'

export default class NewPostForm extends Component {
    state = {
        newPost: {
            title: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const newPost = { ...this.state.newPost }
        newPost[event.target.name] = event.target.value
        this.setState({ newPost })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const newPost = { ...this.state.newPost }
        this.props.addNewPost(newPost)
        this.setState({
            newPost: {
                title: '',
                body: ''
            }
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <input onChange={this.handleChange} type="text" name="title" value={this.state.newPost.title} placeholder='Title' />
                <input onChange={this.handleChange} type="text" name="body" value={this.state.newPost.body} placeholder='Body' />
                <input className='update' type='submit' value='Add Post' />
            </form>
        )
    }
}
