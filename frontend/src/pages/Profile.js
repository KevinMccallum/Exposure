import React, { Component } from 'react'
import { Button, Card } from 'antd'
import { MyContext } from '../context'
import { Link } from 'react-router-dom'

const { Consumer } = MyContext
const { Grid } = Card

const gridStyle = {
  width: '100%',
  textAlign: 'center'
}

const imgProps = {
  src: '../assets/defaulUserPic.png'
}

export default class Profile extends Component {

  state = {
    profile: '',
    profilePic: '../assets/defaulUserPic'
  }



  render() {
    return (
      <Consumer>
        {({ loggedUser }) => (
          <div>
            <h1>Welcome back {loggedUser.name}</h1>
            <Card
              hoverable
              style={{ width: 250 }}
              cover={<img alt='profile pic' {...this.imgProps} />}
            >
              <Grid style={gridStyle}>{loggedUser.email}</Grid>
            </Card>
            <Button>
              <Link to='/create'>Publish Photos</Link>
            </Button>
          </div>
        )}
      </Consumer>
    )
  }

}