import React, { Component } from 'react'
// 引入路由组件
import {HashRouter , Switch , Route} from 'react-router-dom'
// 引入组件
import Login from './views/Login.jsx'
import Nav from './views/Nav.jsx'
import Register from './views/Register.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <HashRouter>
                    <Switch>
                        <Route exact path="/" component={Nav} />
                        <Route path="/login"  component={Login} />
                        <Route path="/reg"  component={Register} />
                        <Route component={Nav} />
                    </Switch>
                </HashRouter>
            </div>
        )
    }
}
