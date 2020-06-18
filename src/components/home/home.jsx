import React, { useState, useEffect } from 'react'
import { Layout, Menu, Icon, Breadcrumb } from 'antd'
import { Link, Route } from 'react-router-dom'

const { Header, Sider, Content } = Layout
const { SubMenu } = Menu
const MenuArr = [

  {
    id: '0',
    name: 'ClassComponent',
    link: '/ClassComponent'
  },
  {
    id: '1',
    name: 'Hoc',
    link: '/Hoc'
  },
  {
    id: '2',
    name: 'RenderProps',
    link: '/RenderProps'
  },
  {
    id: '3',
    name: 'Functional',
    link: '/Functional'
  },
  {
    id: '4',
    name: 'useState',
    link: '/useState'
  },
  {
    id: '5',
    name: 'UseEffect',
    link: '/UseEffect'
  },
  {
    id: '6',
    name: 'CaptureValue',
    link: '/CaptureValue'
  },
  {
    id: '7',
    name: 'UseMemo',
    link: '/UseMemo'
  },
  {
    id: '8',
    name: 'UseCallback',
    link: '/UseCallback'
  },
  {
    id: '9',
    name: 'UseRef',
    link: '/UseRef'
  },
]

function Home(props) {
  const [defaultKey, setDefaultKey] = useState(null)
  const [breadTitle, setbreadTitle] = useState('')
  useEffect(() => {
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
    <Layout style={{height: '100%'}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" selectedKeys={defaultKey} onClick={(key) => menuClick(key)}>
          <Menu.Item>
            <Link to='/' href="/" onClick={()=>setDefaultKey(null)}>
              <span>hooks</span>
            </Link>
          </Menu.Item>
          {
            MenuArr.map((v, k) => {
              if (v.children) {
                return (
                  <SubMenu key={k} title={v.name}>
                    {
                      (v.children|| []).map((v2, k1) => (
                        <Menu.Item key={k1}>
                          <Link to={v2.link}>
                            <Icon type="user" />
                            <span>{v2.name}</span>
                          </Link>
                        </Menu.Item>
                      ))
                    }
                  </SubMenu>
                )
              }
              return (
                <Menu.Item key={k}>
                  <Link to={v.link} href="/user">
                    <Icon type="user" />
                    <span>{v.name}</span>
                  </Link>
                </Menu.Item>
              )
            })
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
                  <span>hooks</span>
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
