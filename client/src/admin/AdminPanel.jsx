import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Col,
  Row,
  Checkbox,
} from "antd";
import useAddTask from "../hooks/useAddTask";
import toast from "react-hot-toast";

const { Option } = Select;

function AdminPanel() {
  const { addTask } = useAddTask();
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    addTask(values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    toast.error("Please fill all fields")
  };

  return (
    <div className="p-4 flex justify-center items-center  flex-col ">
      <h1 className="text-3xl text-blue-500 mb-4" >Add Hero</h1>
      <Form
        form={form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 800,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Hero's Name"
          name="heroName"
          rules={[
            {
              required: true,
              message: `Please input hero's name!`,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Description"
          name="description"
          rules={[
            {
              required: true,
              message: `Please input description!`,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Hero's Image Url"
          name="heroImageUrl"
          rules={[
            {
              required: true,
              message: `Please input hero Img url!`,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item
          label="Hero's Face Image Url"
          name="heroFaceUrl"
          rules={[
            {
              required: true,
              message: `Please input hero Img url!`,
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item label="Attributes"></Form.Item>

        <Form.Item
          label="Health"
          name="health"
          rules={[
            {
              required: true,
              message: `Please input Health!`,
            },
          ]}
        >
          <InputNumber min={0}/>
        </Form.Item>

        <Form.Item
          label="Health Up Per Level"
          name="healthUp"
          rules={[
            {
              required: true,
              message: `Please input Health Up Per Level!`,
            },
          ]}
        >
          <InputNumber min={0}/>
        </Form.Item>

        <Form.Item
          label="Mana"
          name="mana"
          rules={[
            {
              required: true,
              message: `Please input Mana!`,
            },
          ]}
        >
          <InputNumber min={0}/>
        </Form.Item>

        <Form.Item
          label="Mana Up Per Level"
          name="manaUp"
          rules={[
            {
              required: true,
              message: `Please input Mana Up Per Level!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Strength"
          name="strength"
          rules={[
            {
              required: true,
              message: `Please input Strength!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Strength Up Per Level"
          name="strengthUp"
          rules={[
            {
              required: true,
              message: `Please input Up Per Level!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Agility"
          name="agility"
          rules={[
            {
              required: true,
              message: `Please input Agility!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Agility Up Per Level"
          name="agilityUp"
          rules={[
            {
              required: true,
              message: `Please input Up Per Level!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>


        <Form.Item
          label="Intelligence"
          name="intelligence"
          rules={[
            {
              required: true,
              message: `Please input Intelligence!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Intelligence Up Per Level"
          name="intelligenceUp"
          rules={[
            {
              required: true,
              message: `Please input Up Per Level!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>


        <Form.Item label="STATS"></Form.Item>

        <Form.Item
          label="Damage Lower Limit"
          name="damageLL"
          rules={[
            {
              required: true,
              message: `Please input Damage Lower Limit!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Damage Upper Limit"
          name="damageUL"
          rules={[
            {
              required: true,
              message: `Please input Damage Upper Limit!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Range"
          name="range"
          rules={[
            {
              required: true,
              message: `Please input Range!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Movement Speed"
          name="movSpeed"
          rules={[
            {
              required: true,
              message: `Please input Movement Speed!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Armour"
          name="armour"
          rules={[
            {
              required: true,
              message: `Please input Movement Armour!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Magical Defense"
          name="magicalDefense"
          rules={[
            {
              required: true,
              message: `Please input Magical Defense!`,
            },
          ]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="Turn Rate"
          name="turnRate"
          rules={[
            {
              required: true,
              message: `Please input Turn Rate!`,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Day Vision"
          name="dayVision"
          rules={[
            {
              required: true,
              message: `Please input Day Vision!`,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          label="Night Vision"
          name="nightVision"
          rules={[
            {
              required: true,
              message: `Please input Night Vision!`,
            },
          ]}
        >
          <InputNumber />
        </Form.Item>

        <Form.Item
          name="primaryAttribute"
          label="Primary Attribute"
          rules={[
            {
              required: true,
              message: "Please select Primary Attribute!",
            },
          ]}
        >
          <Select placeholder="Select Primary Attribute">
            <Option value="agility">Agility</Option>
            <Option value="strength">Strength</Option>
            <Option value="intelligence">Intelligence</Option>
            <Option value="universal">Universal</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="attackType"
          label="Attack Type"
          rules={[
            {
              required: true,
              message: "Please select Attack Type!",
            },
          ]}
        >
          <Select placeholder="Select Attack Type">
            <Option value="melee">Melee</Option>
            <Option value="range">Range</Option>
          </Select>
        </Form.Item>

        <Form.Item name="roles" label="Roles">
          <Checkbox.Group>
            <Row>
              <Col span={8}>
                <Checkbox
                  value="tank"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Tank
                </Checkbox>
              </Col>

              <Col span={8}>
                <Checkbox
                  value="carry"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Carry
                </Checkbox>
              </Col>

              <Col span={8}>
                <Checkbox
                  value="offlaner"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Offlaner
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="support"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Support
                </Checkbox>
              </Col>

              <Col span={8}>
                <Checkbox
                  value="hard-support"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Hard-Support
                </Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox
                  value="midlaner"
                  style={{
                    lineHeight: "32px",
                  }}
                >
                  Midlaner
                </Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </Form.Item>
        <Form.Item label="Ability 1 Name" name="ability_1_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 1 Description" name="ability_1_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 1 Image Url" name="ability_1_image">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 2 Name" name="ability_2_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 2 Description" name="ability_2_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 2 Image Url" name="ability_2_image">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 3 Name" name="ability_3_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 3 Description" name="ability_3_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 3 Image Url" name="ability_3_image">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 4 Name" name="ability_4_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 4 Description" name="ability_4_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 4 Image Url" name="ability_4_image">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 5 Name" name="ability_5_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 5 Description" name="ability_5_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 5 Image Url" name="ability_5_image">
          <Input.TextArea />
        </Form.Item>
        <Form.Item label="Ability 6 Name" name="ability_6_name">
          <Input />
        </Form.Item>
        <Form.Item label="Ability 6 Description" name="ability_6_description">
          <Input.TextArea />
        </Form.Item>
        <Form.Item 
        label="Ability 6 Image Url" 
        name="ability_6_image"
        
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item 
        label="Shard Ability Name" 
        name="shard_ability_name"
        rules={[
          {
            required: true,
            message: "Please Enter Shard Ability Name !",
          },
        ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Shard Ability Description"
          name="shard_ability_description"
          rules={[
            {
              required: true,
              message: "Please Enter Shard Ability Description !",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item 
        label="Shard Ability Image Url" 
        name="shard_ability_image"
        rules={[
          {
            required: true,
            message: "Please Enter Shard Ability Image Url !",
          },
        ]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item 
        label="Scepter Ability Name"
         name="scepter_ability_name"
         rules={[
          {
            required: true,
            message: "Please Enter Scepter Ability Name !",
          },
        ]}
         >
          <Input />
        </Form.Item>
        <Form.Item
          label="Scepter Ability Description"
          name="scepter_ability_description"
          rules={[
            {
              required: true,
              message: "Please Enter Scepter Ability Description !",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Scepter Ability Image Url"
          name="scepter_ability_image"
          rules={[
            {
              required: true,
              message: "Please Enter Scepter Ability Image Url !",
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Add Hero to Database
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default AdminPanel;
