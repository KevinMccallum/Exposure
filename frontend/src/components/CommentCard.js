import React from 'react'
import { Card } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'
import { MyContext } from '../context'

const { Consumer } = MyContext

const CommentCard = ({ author, body, _id, removeComment }) => {
  return (
    <Consumer>
      {({ loggedUser }) => (
        <>
          <Card
            actions={
              loggedUser?.email === author?.email && [
                <DeleteOutlined
                  key='delete'
                  onClick={() => removeComment(_id)}
                />
              ]
            }
            title={`By ${author?.email}`}
          >
            {body}
          </Card>
        </>
      )}
    </Consumer>
  );
}

export default CommentCard