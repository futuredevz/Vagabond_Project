import React, { Component } from 'react'

export default class EditPostForm extends Component {
    state = {
        post: {
            title: '',
            body: ''
        }
    }

    handleChange = (event) => {
        const post = { ...this.state.post }
        console.log(event.target.value)
        post[event.target] = event.target.value
        this.setState({ post })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <input type='text' name='title'
                        value={this.state.post.title}
                        onChange={this.handleChange}
                    />
                    <input type='text' name='body'
                        value={this.state.post.body}
                        onChange={this.handleChange}
                    />
                    {/* <Input type='submit' value='Update User' /> */}
                </form>
            </div>
        )
    }
}
