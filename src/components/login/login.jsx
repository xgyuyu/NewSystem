import React, { Fragment, useState } from 'react'
import { fetchData, routerPush } from '../../common/common'
import { Button, message, Input, Icon } from 'antd'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [btnloading, setloginloading] = useState(false)
    const handleUsername = event => setUsername(event.target.value)
    const handlePassword = event => setPassword(event.target.value)
    const loginFn = () => {
        setloginloading(true)

        localStorage.setItem('username', 'admin')
        message.success('登录成功')
        routerPush('/')

        // fetchData('/api/login', {
        //     method: 'POST',
        //     body: JSON.stringify({
        //         username: username,
        //         password: password
        //     }),
        // }).then((res) => {
        //     setloginloading(false)
        //     if (res.code === 1) {
        //         localStorage.setItem('username', res.result.username)
        //         message.success('登录成功')
        //         routerPush('/')
        //     } else {
        //         message.error(res.message)
        //     }
        // })
    }
    return (
        <Fragment>
            {/*<input id="name" placeholder="请输入用户名或邮箱" value={username} className="" type="text" onChange={handleUsername} />*/}
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
              value={username}
              onChange={handleUsername}
            />
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePassword}
            />
            {/*<input id="password" name="password" value={password} type="password" onChange={handlePassword} />*/}
            <Button onClick={loginFn} type="primary" loading={btnloading}>登录</Button>
        </Fragment>
    )
}

export default Login
