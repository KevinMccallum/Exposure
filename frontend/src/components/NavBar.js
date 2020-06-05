import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import '../index.css'
import { MyContext } from '../context'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  HomeOutlined,
  LogoutOutlined,
  UserAddOutlined,
  LoginOutlined,
  DesktopOutlined,
} from '@ant-design/icons'
import '../index.css'

const { Header, Content, Footer } = Layout

export class NavBar extends Component {
  state = {
    current: 'mail',
  }

  handleClick = (e) => {
    this.setState({
      current: e.key,
    })
  }
  render() {
    return (
      <div className="layout-container">
        <MyContext.Consumer>
          {({ loggedUser, logout }) => (
            <Layout className="layout">
              <Header>
                <div className="logo" />
                <Menu
                  onClick={this.handleClick}
                  selectedKeys={[this.state.current]}
                  theme="dark"
                  mode="horizontal"
                >
                  <Menu.Item key="mail" icon={<HomeOutlined />}>
                    <Link to="/"></Link>Home
                  </Menu.Item>

                  {!loggedUser?.email && (
                    <Menu.Item key="1" icon={<UserAddOutlined />}>
                      <Link to="/signup"></Link>Sign up
                    </Menu.Item>
                  )}

                  {!loggedUser?.email && (
                    <Menu.Item key="2" icon={<LoginOutlined />}>
                      <Link to="/login"></Link>Log in
                    </Menu.Item>
                  )}

                  {loggedUser?.email && (
                    <Menu.Item key="3" icon={<DesktopOutlined />}>
                      <Link to="/create"></Link>Post Photo
                    </Menu.Item>
                  )}


                  {loggedUser?.email && (
                    <Menu.Item key="4" icon={<LogoutOutlined />} onClick={logout}>
                      Log out
                    </Menu.Item>
                  )}
                </Menu>
              </Header>
              <Content>
                <div className="site-layout-content">
                  <>{this.props.children}</>
                </div>
              </Content>
            </Layout>
          )}
        </MyContext.Consumer>

      </div>
    )
  }
}
NavBar.contextType = MyContext

export default withRouter(NavBar)
