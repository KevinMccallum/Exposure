import React, { Component } from ' react'
import { MyContext } from '../context'
import { Typography } from 'antd'
import AuthForm from '../components/AuthForm'
import AUTH_SERVICE from '../services/auth'

const { Title } = Typography

export default class Login extends Component {
  onFinish = async (values) => {
    const { data } = await AUTH_SERVICE.LOGIN(values)
    this.context.logUser(data.user)
    this.props.history.push('/profile')
  }

  onFinishFail = (errorInfo) => {
    console.log("Error:", errorInfo);
  };

  render() {
    return (
      <div>
        <Title>Login</Title>
        <AuthForm
          title='login'
          onFinish={this.onFinish}
          onFinishFail={this.onFinishFail}
        />
      </div>
    )
  }
}

Login.contextType = MyContext