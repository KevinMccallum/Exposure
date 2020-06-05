import React, { Component } from 'react'
import PostForm from '../components/PostForm'
import POST_SERVICE from '../services/post'
import { message } from 'antd'


export default class Create extends Component {
  state = { imgURL: '' }

  setImgURL = (imgURL) => {
    this.setState({
      imgURL
    })
  }

  onChange = (info) => {
    if (info.file.status !== 'uploading') {
      this.setImgURL(info.file.response.secure_url)
    }
    if (info.file.status === 'done') {
      console.log(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      console.log(`${info.file.name} file upload failed.`)
    }
  }

  onFinish = async (post) => {
    const { imgURL } = this.state
    const response = await POST_SERVICE.ADD_POST({ ...post, imgURL })
    console.log(response)
    this.addPostSuccess()
    this.props.history.push('/')
  }

  addPostSuccess = () => {
    message.success('Photo Uploaded')
  }

  render() {
    return (
      <div>
        <h1>Submit your Photo</h1>
        <PostForm
          title='Photo'
          onFinish={this.onFinish}
          setImgURL={this.setImgURL}
          img={this.state.imgURL}
          onChange={this.onChange}
        />
      </div>
    )
  }
}