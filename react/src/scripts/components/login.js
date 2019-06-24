import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import axios from "axios";
export default class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
	state={
		flag:false
	};
getCheck=()=>{
	this.props.form.validateFields(['tel': string[],'username': string[],'password': string[]],(err, values) => {
	  if (!err) {
			const telreg = /^1(3||5||6||7||8)\d{9}$/;
			if(telreg.test(values.tel)){
	    console.log('Received values of form: ', values.tel);

}else{
	alert("请输入正确手机号")
}
	  }
	});
}
  render() {
    const { getFieldDecorator } = this.props.form; 
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
							
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />,
          )}
        </Form.Item>	
				<Form.Item>
				  {getFieldDecorator('tel', {
				    rules: [{ required: true, message: 'Please input your Password!' }],
				  })(
				    <Input
				      prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
				      type="number"
				      placeholder="telnum"
				    />,
				  )}
				</Form.Item>
				<Form.Item>
				  {getFieldDecorator('yzm', {
				    rules: [{ required: true, message: 'Please input your yzm!' }],
				  })(
					<div prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}}  />}>
					<Input
							prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)'}}  />}
				      style={{ float: 'left'},{ width: '70%'}}
				      type="number"
				      placeholder="checknum"
				    /><Button type="primary" onClick={this.getCheck} disabled={this.state.flag} style={{ width: '30%'}}>sendChecknum</Button>
						</div>
				    ,
				  )},
				</Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a> <br/>
          <Button type="primary" htmlType="submit" className="login-form-button" block>
            Log in
          </Button><br/>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}



