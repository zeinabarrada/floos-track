import { Button, Form, Input } from "antd";

function Login() {
  const [form] = Form.useForm();

  return (
    <Form layout="vertical" form={form} style={{ maxWidth: 600 }}>
      <Form.Item label="Username">
        <Input placeholder="Please enter your username" />
      </Form.Item>
      <Form.Item label="Password">
        <Input placeholder="Please enter your password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary">Submit</Button>
      </Form.Item>
    </Form>
  );
}
export default Login;
