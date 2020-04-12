import React, { Component } from 'react'
import { Flex, InputItem, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'
import '../styles/login.scss'

export default class Register extends Component {
    render() {
        return (
            <div>
                <WingBlank size="md">
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <Flex justify="center">
                        <img src={require('../assets/logo.png')} alt="logo" />
                    </Flex>
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <WhiteSpace size="lg" />
                    <InputItem
                        placeholder="请输入手机号"
                        clear
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="xs" />
                    <InputItem
                        placeholder="请输入密码"
                        clear
                    >
                        <div style={{ backgroundImage: 'url(https://zos.alipayobjects.com/rmsportal/DfkJHaJGgMghpXdqNaKF.png)', backgroundSize: 'cover', height: '22px', width: '22px' }} />
                    </InputItem>
                    <WhiteSpace size="lg" />
                    <Button>登录</Button>
                    <WhiteSpace size="lg" />
                    <Flex justify="between">
                        <Link to="/reg">前往快速注册</Link>
                        <Link to="/reg">忘记密码?</Link>
                    </Flex>
                    <Flex justify="center">
                        <p>登录注册既代表同意远吗房产用户协议</p>
                    </Flex>
                </WingBlank>
            </div>
        )
    }
}
