import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Link, Route } from 'react-router-dom'
import { checkLogin } from '../../common/common'
import User from "../user/user"
import Main from "../main/main"

const { Header, Sider, Content } = Layout
function Home(props) {
  useEffect(() => {
      checkLogin()
  }, [])
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  console.log(props.children)
  return(
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <Link to="/" href="/">新系统</Link>
        </div>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/user" href="/user">
              <Icon type="user" />
              <span>用户列表</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/main" href="/main">
              <Icon type="video-camera" />
              <span>主列表</span>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          {props.children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default Home
