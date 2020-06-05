import React, { Component } from 'react'
import { Typography, Form, Input, Button } from 'antd'
import AUTH_SERVICE from '../services/auth'
import handleAsync from '../util'

const { Title } = Typography

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
}

const tailLayout = {
  wrapperCol: { offset: 8, span: 8 }
}

export default class Signup extends Component {

  state = {
    msg: null
  }

  onFinish = async (values) => {
    const response = await handleAsync(() => AUTH_SERVICE.SIGNUP(values));

    if (response.err) {
      this.setState({ msg: 'A user with the given email is already registered' })
    } else {
      this.setState({ msg: 'response.message' })
      this.props.history.push('/login')
    }

  }

  onFinishFail = (errorInfo) => {
    console.log('Error', errorInfo)
  }

  render() {
    return (
      <div>
        <Title>Signup</Title>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFail}
        >
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label='email'
            name='email'
            rules={[{ required: true, message: 'Please enter your mail address' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>


          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType='submit'>
              Sign up
            </Button>
            <br />
            <br />
            Already have an account ?
            <a href="/login">
              Log in
            </a>
          </Form.Item>

        </Form>
        {/* <div className="message-container">
          {!this.state.loading && <p>{this.state.msg}</p>}
          {this.state.loading && <p>Loading...</p>}
        </div> */}
      </div>
    )
  }
}