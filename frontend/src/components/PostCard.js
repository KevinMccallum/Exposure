import React from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'antd'
import { MyContext } from '../context'
import { DeleteOutlined, EditOutlined, PlusCircleOutlined } from '@ant-design/icons'
import { Row, Col } from 'antd'

const { Meta } = Card
const { Consumer } = MyContext

const PostCard = ({ name, _id, description, author, comments, imgURL, deletePost }) => {
  return (
    <Consumer>
      {({ loggedUser }) => (

        <Row type='flex' justify='center' gutter={[48, 48]}>
          <Col className='gutter-row' span={6} xs={12}>
            <Card
              title={name}
              size='small'
              style={{ width: 300, textAlign: 'center' }}
              cover={
                <Link to={`/post/${_id}`}>
                  <img
                    alt='photo'
                    src={imgURL}
                    style={{
                      maxWidth: 250,
                      minWidth: 200,
                      maxHeight: 200,
                      minHeight: 100,
                      margin: 25,
                    }}
                  />
                </Link>
              }
              actions={
                [loggedUser?.email == author?.email && [
                  <DeleteOutlined key='delete' onClick={() => deletePost(_id)} />
                ],
                ]
              }
            />
          </Col>
        </Row>
      )
      }
    </Consumer>
  )
}

export default PostCard