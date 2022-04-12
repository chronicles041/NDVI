import { Input, Form, Button, Row, notification, DatePicker } from "antd";
import React from "react";
import MapService from "./mapService";

class AddField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValue: {},
    };
  }

  onAddField = () => {
    const {formValue} = this.state
    const params = {
      farm_name: formValue.farm_name,
      plantation_date:formValue.plantation_date,
      disaster_date: null,
      harvest_date: formValue.harvest_date,
      farm_area: null,
      warranty_id: null,
      farm_polygon: {
        location: this.props.newFarm,
      },
    };

    MapService.addNewField(params)
      .then((res) => {
        notification.open({ message: "Field Added Successfully" });
        
      })
      .catch((err) => {
        notification['error']({
          message: 'Failed. Check for error',
          description: <>Please Make Sure You have Drawn Polygon </>,
      });
      });
    
  };

  onFormChange = (e) => {
    this.setState({
      formValue: { ...this.state.formValue, [e.target.name]: e.target.value },
    });
    // setRequiredMarkType(requiredMarkValue);
  };

  render() {
    return (
      <>
        <Row>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={() => this.onAddField()}
            // onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Farm Name"
              // onValuesChange={this.onFormChange}
              rules={[{ required: true, message: "Please input Farm Name!" }]}
            >
              <Input name="farm_name" onChange={this.onFormChange} />
            </Form.Item>

            <Form.Item label="Plantation Date">
              <DatePicker
                name="plantation_date"
                onChange={(value) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      plantation_date: value.format("YYYY-MM-DD"),
                    },
                  });
                }}
                format={"YYYY/MM/DD"}
              />
            </Form.Item>
            <Form.Item label="Harvest Date">
              <DatePicker
                name="harvest_date"
                onChange={(value) => {
                  this.setState({
                    formValue: {
                      ...this.state.formValue,
                      harvest_date: value.format("YYYY-MM-DD"),
                    },
                  });
                }}
                format={"YYYY/MM/DD"}
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Add Field
              </Button>
            </Form.Item>
          </Form>
        </Row>
      </>
    );
  }
}

export default AddField;
