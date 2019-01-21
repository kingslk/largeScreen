import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import Axios from 'axios';
import './Login.css';
const FormItem = Form.Item;

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { form } = this.props;
    const { validateFields } = form;
    validateFields((err, values) => {
      console.log(values);
      if (!err) {
        Axios({
          url: 'http://192.168.1.106/user/subLogin',
          method: 'post',
          params: {
            username: values.username,
            password: values.password
          }
        }).then(response => {
          console.log(response);
          // const {states,history} = response.data;
          // if(states === '0000'){
          //     history.push('/index')
          // }
        });
      }
    });
    const { history } = this.props;
    history.push('/index');
  };

  render() {
    const { form } = this.props;
    const { getFieldDecorator } = form;

    return (
      <div className="login">
        <div className="login-form">
          <div className="login-logo">
            <span>贵州高速公路龙宫服务区</span>
          </div>
          <Form onSubmit={this.handleSubmit} style={{ maxWidth: '300px' }}>
            <FormItem>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: '请输入用户名!' }]
              })(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="user" style={{ fontSize: 13 }} />}
                  placeholder="请输入管理账号"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                  style={{ width: 250 }}
                  prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
                  type="password"
                  placeholder="请输入管理密码"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true
              })(<Checkbox>记住我</Checkbox>)}
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                style={{ width: '100%' }}
              >
                登录
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    );
  }
}

export default Form.create()(Login);
