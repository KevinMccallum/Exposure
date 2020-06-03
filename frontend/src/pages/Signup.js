import React, { Component } from 'react'
import { Typography } from 'antd'
import AUTH_SERVICE from '../services/auth'
import AuthForm from '../components/AuthForm'

const { Title } = Typography

export default class Signup extends Component {

  onFinish = async (values) => {
    await AUTH_SERVICE.SIGNUP(values)
    this.props.history.push('/login')
  }

  onFinishFail = (errorInfo) => {
    console.log('Error', errorInfo)
  }

  render() {
    return (
      <div>
        <Title>Signup</Title>
        <AuthForm
          title='signup'
          onFinish={this.onFinish}
          onFinishFail={this.onFinishFail}
        />
      </div>
    )
  }
}