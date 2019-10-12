import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import { Link, Route } from 'react-router-dom'
import { checkLogin } from '../../common/common'

const { Header, Sider, Content } = Layout

const MenuArr = [
  {
    id: '0',
    name: '用户列表',
    link: '/user'
  },
  {
    id: '1',
    name: '主列表',
    link: '/main'
  }
]

function Home(props) {
  const [defaultKey, setDefaultKey] = useState(null)
  const [breadTitle, setbreadTitle] = useState('')
  useEffect(() => {
    checkLogin()
    const pathname = props.location.pathname
    MenuArr.map(v => {
      if (pathname === v.link) {
        setDefaultKey([v.id])
      }
    })
  }, [])
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  const menuClick = (key) => {
    setDefaultKey([key.key])
    if (!isNaN(Number(key.key))) {
      setbreadTitle(MenuArr[key.key].name)
    } else {
      setbreadTitle('')
    }
  }

  return(
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" selectedKeys={defaultKey} onClick={(key) => menuClick(key)}>
          <Menu.Item>
            <Link to='/' href="/" onClick={()=>setDefaultKey(null)}>
              <span>新系统</span>
            </Link>
          </Menu.Item>
          {
            MenuArr.map((v, k) => (
              <Menu.Item key={k}>
                  <Link to={v.link} href="/user">
                    <Icon type="user" />
                    <span>{v.name}</span>
                  </Link>
              </Menu.Item>
            ))
          }
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 0 0 20px' }}>
          <Icon
            className="trigger"
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggle}
          />
          <div style={{display: 'inline-block', marginLeft: 10}}>

            <Breadcrumb separator=">">
              <Breadcrumb.Item>
                <Link
                  to='/'
                  href="/"
                  onClick={()=>{
                    setDefaultKey(null)
                    setbreadTitle('')
                  }}
                >
                  <span>新系统</span>
                </Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>{breadTitle}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
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
