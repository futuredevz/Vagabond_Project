import React, { Component } from 'react'

export default class EditPostForm extends Component {
    state = {
        post:{
            title:'',
            body:''
        }
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
                    <Input type='submit' value='Update User' />
                </form>
            </div>
        )
    }
}
