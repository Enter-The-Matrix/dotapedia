import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import bg from "../assets/bg.jpg"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AdminLogin = () => {

const navigate = useNavigate();
function removeSpaces(str) {
  return str.trim();
}

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const username = removeSpaces(values.username)
    const password = removeSpaces(values.password)
    
    if( username == "ashwani" && password=="iamrock@01"){
      navigate('/admin/panel');
      console.log("if");
    }
    else{
      console.log("else");
      toast.error("Wrong Username or password")
    }
    console.log("last");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" 
    style={{backgroundImage: `url(${bg})`}}>
      <div className="w-1/4 p-4 bg-gray-400 rounded-lg bg-clip-padding backdrop-filter 
      backdrop-blur-md bg-opacity-10 border border-gray-100">
        <Form
          name="login-form"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <h1 className="text-3xl font-bold text-center mb-4 "> Login to Admin Pannel </h1>

          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="flex justify-between">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </div>
          </Form.Item>

          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button w-full"
            //   disabled={loading}
            >
              Login
            {/* {loading ? 'logging...' : 'Log-In'}            */}
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default AdminLogin;
