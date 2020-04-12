import React, { Component } from 'react'
import { Flex, InputItem, Checkbox, WhiteSpace, WingBlank, Button } from 'antd-mobile'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>
                <WingBlank size="md">
                    <InputItem
                        placeholder="请输入手机"
                    />
                    <InputItem
                        placeholder="请输入密码"
                    />
                    <InputItem
                        placeholder="请输入验证码"
                    />
                    <Flex style={{ padding: '15px' }}>
                        <Flex.Item>
                            <Checkbox.AgreeItem onChange={e => console.log('checkbox', e)}>我已同意用户注册协议及隐私权政策</Checkbox.AgreeItem>
                        </Flex.Item>
                    </Flex>
                    <Button>注册</Button>
                    <Link to="/login">已有账号</Link>
                </WingBlank>
            </div>
        )
    }
}
