import React from 'react'
import { Link } from 'react-router-dom'
import { Form, Input, Button, Upload, Tooltip, Select } from 'antd'
import { UploadOutlined, QuestionCircleOutlined } from '@ant-design/icons'
const { TextArea } = Input
const { Option } = Select

function PostForm({ onFinish, onChange, disableUpdate }) {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 8 },
  }

  const tailLayout = {
    wrapperCol: { offset: 8, span: 8 },
  }

  const props = {
    name: 'imageURL',
    action: 'https://evening-meadow-75354.herokuapp.com/post/upload/',
  }

  return (
    <Form {...layout} name="basic" onFinish={onFinish}>
      <Form.Item
        label="Photo Name"
        name="name"
        rules={[{ required: true, message: 'Please name your Photo' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Description"
        name="description"
        rules={[{ required: true, message: 'Input a description 250 characters max!', max: 250 }]}
      >
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        {...tailLayout}
        rules={[
          {
            required: true,
            message: `Submit your Photo`,
            whitespace: true,
          },
        ]}
      >
        <Upload {...props} onChange={onChange}>
          <Button>
            <UploadOutlined />
            Upload
          </Button>
        </Upload>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: '#faad14', borderColor: '#faad14' }}
        >
          Submit
        </Button>

        <Button
          type="primary"
          size="large"
          style={{ backgroundColor: '#faad14', borderColor: '#faad14', margin: 60 }}
        >
          <Link to="/">Go back</Link>
        </Button>
      </Form.Item>
    </Form>
  )
}

export default PostForm
