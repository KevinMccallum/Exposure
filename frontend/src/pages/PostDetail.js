import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { MyContext } from '../context'
import POST_SERVICE from '../services/post'
import COMMENT_SERVICE from '../services/comment'
import CommentCard from '../components/CommentCard'
import { Button } from 'antd'

const { Consumer } = MyContext

export default class PostDetail extends Component {
  state = {
    post: {},
    comment: '',
    showForm: true
  }

  componentDidMount = async () => {

    const res = await POST_SERVICE.VIEW_POST(this.props.match.params.id)
    const { post } = res.data
    console.log(post)


    const response = await COMMENT_SERVICE.GET_COMMENT(post._id)
    const { comments } = response.data
    console.log(comments)

    post.comments = comments

    this.setState({ post })

  };


  handleComment = (e) => {
    this.setState({
      comment: e.target.value,
    });
  };

  addComment = async (e) => {
    e.preventDefault();

    const { data: { comment } } = await COMMENT_SERVICE.CREATE_COMMENT({ body: this.state.comment, postId: this.state.post._id })

    this.setState({
      post: { comments: [comment, ...this.state.post.comments] },
      showForm: true,
      comment: ''
    })
  };

  removeComment = async (id) => {

    const res = COMMENT_SERVICE.DELETE_COMMENT(id)
    this.setState({ post: { comments: this.state.post.comments.filter((comment) => id !== comment._id) } })

  };

  render() {
    return (

      <Consumer>
        {({ loggedUser }) => (
          <>
            <div>
              <img className='image' src={this.state.post.imgURL} />
            </div>
            <div>
              <h3>Name:</h3>
              <h1>{this.state.post.name}</h1>
            </div>
            <div>
              <h3>Description</h3>
              {this.state.post.description}
            </div>
            <div>
              <h3>Created By:</h3>
              <h2>{this.state.post.author?.name}</h2>
            </div>
            {this.state.showForm ? (
              loggedUser ? (
                <Button
                  onClick={() =>
                    this.setState({
                      showForm: !this.state.showForm,
                    })
                  }
                >
                  Add comment
                </Button>
              ) : (
                  <>
                    <p>You must login to comment</p>
                    <Link to="/login">Login</Link>
                  </>
                )
            ) : (
                <form onSubmit={this.addComment}>
                  <textarea
                    name="comment"
                    id="comment"
                    cols="90"
                    rows="10"
                    value={this.state.comment}
                    onChange={this.handleComment}
                  ></textarea>
                  <br />
                  <Button type="primary" htmlType="submit">
                    Add comment
                </Button>
                  <Button
                    type="ghost"
                    onClick={() =>
                      this.setState({
                        showForm: !this.state.showForm,
                      })
                    }
                  >
                    Cancel
                </Button>
                </form>
              )}
            <h3>Comments:</h3>
            {this.state.post.comments?.map((comment) => (
              <CommentCard
                removeComment={this.removeComment}
                {...comment}
                key={comment._id}
              />
            ))}
          </>
        )}
      </Consumer>
    )
  }
}