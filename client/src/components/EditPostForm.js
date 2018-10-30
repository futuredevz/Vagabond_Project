import React, { Component } from 'react'
import axios from 'axios'
import { Form, Button, Modal } from 'semantic-ui-react'

export default class EditPostForm extends Component {
    state = {
        post: {
            title: '',
            body: ''
        },
        modalOpen: false
    }


    handleChange = (event) => {
        const post = { ...this.state.post }
        post[event.target.name] = event.target.value
        this.setState({ post })
    }

    handleSubmit = async (event) => {
        const cityId = this.props.cityId
        const postId = this.props.postId
        event.preventDefault()
        await axios.put(`/api/cities/${cityId}/posts/${postId}`, this.state.post)
        this.props.push(`/cities/${cityId}/posts/${postId}`)
        this.setState({ modalOpen: false })
        await this.props.fetchData
    }

    handleOpen = () => this.setState({ modalOpen: true })

    editPostModal = () => (
        
        <Modal trigger={<Button onClick={this.handleOpen}>Edit</Button>}
            open={this.state.modalOpen}
        >
            <Modal.Content form>
                <Form onSubmit={this.handleSubmit}>
                    Title:<input type='text' name='title'
                        value={this.state.post.title}
                        onChange={this.handleChange}
                    />
                    Body:<input type='text' name='body'
                        value={this.state.post.body}
                        onChange={this.handleChange}
                    />
                    <Button type='submit' value='Update Post'>Submit</Button>
                </Form>

            </Modal.Content>
        </Modal>
    )


    render() {
        return (
            this.editPostModal()

        )

        // <div>
        //     <h2>Edit Post</h2>
        //     <form onSubmit={this.handleSubmit}>
        //         Title:<input type='text' name='title'
        //             value={this.state.post.title}
        //             onChange={this.handleChange}
        //         />
        //         Body:<input type='text' name='body'
        //             value={this.state.post.body}
        //             onChange={this.handleChange}
        //         />
        //         <input type='submit' value='Update Post' />
        //     </form>
        // </div>

    }
}
