import React from 'react'
import { Form, Input, Button } from 'antd'

function AuthForm({ onFinish, onFinishFail, title }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 }
  }

  return (
    <Form
      {...layout}
      name='basic'
      onFinish={onFinish}
      onFinishFailed={onFinishFail}
    >

      <Form.Item
        label='email'
        name='email'
        rules={[{ required: true, message: 'Please enter your mail address' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='password'
        name='password'
        rules={[{ required: true, message: 'Please enter your password' }]}
      >
        <Input.Password />
      </Form.Item>


      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {title}
        </Button>
      </Form.Item>

    </Form>
  )
}

export default AuthForm