import React, { Component } from 'react';
import { login } from '../../util/APIUtills';
import './login.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';
import { antIcon } from 'antd';

import { Input, Button, notification } from 'antd';
import { Form } from '@ant-design/compatible';
import Grid from '@material-ui/core/Grid';


const FormItem = Form.Item;

class Login extends Component {
    render() {
        const AntWrappedLoginForm = Form.create()(LoginForm)       
        return (

            <Grid direction='row' container  >
                {/* <Grid className="clm1" flex='1'>
                    FAHIOIN HUB
                </Grid> */}

                <Grid className="clm2">
                    <div className="login-container">
                            <h1 className="page-title">Login</h1>
                            <div className="login-content">
                                <AntWrappedLoginForm onLogin={this.props.onLogin} />
                            </div>
                    </div>
                </Grid>

            </Grid>
        );
    }
}



class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();   
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                .then(response => {
                    localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                    this.props.onLogin();
                }).catch(error => {
                    if(error.status === 401) {
                        notification.error({
                            message: 'Polling App',
                            description: 'Your Username or Password is incorrect. Please try again!'
                        });                    
                    } else {
                        notification.error({
                            message: 'Polling App',
                            description: error.message || 'Sorry! Something went wrong. Please try again!'
                        });                                            
                    }
                });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem className="formitem">
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please input your username or email!' }],
                    })(
                    <Input className="plc"
                        size="large"
                        name="usernameOrEmail" 
                        placeholder="Username or Email" />    
                    )}
                </FormItem >
                <FormItem className="formitem">
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input className="plc2"
                        prefix={<antIcon type="lock" />}
                        size="large"
                        name="password" 
                        type="password" 
                        placeholder="Password"  />                        
                )}
                </FormItem>
                <FormItem className="formitem2">
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                     <Link className="link" to="/auth">register now!</Link>
                </FormItem>
            </Form>
        );
    }
}


export default Login;