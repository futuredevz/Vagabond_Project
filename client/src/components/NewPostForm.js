import React, { Component } from 'react'
import { Form, Button, Modal } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledForm = styled(Form)`
    &&& {
        width: 30vw; 
        margin:auto;   
    }
`

export default class NewPostForm extends Component {
    state = {
        newPost: {
            title: '',
            body: ''
        },
        modalOpen: false
    }

    handleOpen = () => this.setState({ modalOpen: true })

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
        this.setState({ modalOpen: false })
    }

    addNewPostModal = () => (
        <Modal trigger={<Button onClick={this.handleOpen}>Add New Post</Button>}
            open={this.state.modalOpen}
            >
            <Modal.Content form>
                <StyledForm onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} type="text" name="title" value={this.state.newPost.title} placeholder='Title' />
                    <input onChange={this.handleChange} type="text" name="body" value={this.state.newPost.body} placeholder='Body' height='50%' />
                    <Button  className='update' type='submit' value='Add Post'>Submit</Button>
                </StyledForm>
            </Modal.Content>
        </Modal>
    )
    render() {
        return (
            this.addNewPostModal()
        )
    }
}
