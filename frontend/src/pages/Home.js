import React, { Component } from 'react'
import POST_SERVICE from '../services/post'
import { message } from 'antd'
import PostCard from '../components/PostCard'
import { Link } from 'react-router-dom'


export default class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount = async () => {

    const res = await POST_SERVICE.VIEW_POSTS()
    const { posts } = res.data
    this.setState({
      posts,
    });

  }

  deletePost = async (id) => {
    await POST_SERVICE.DELETE_POST(id)
    const { posts } = this.state
    const newArray = posts.filter((post) => post._id !== id)
    this.setState({ posts: newArray })
    this.deleteSuccess()
  }

  deleteSuccess = () => {
    message.success('Your photo was deleted succesfully')
  }

  render() {
    return (
      <>
        <h1>Exposure</h1>
        <h4>Share your greates pictures with the world!!!!</h4>
        {this.state.posts.map((post) => (
          <PostCard deletePost={this.deletePost} {...post} key={post._id} />
        ))}
      </>
    )
  }
}