import { Component } from "react";
import { Form, Card, validation } from "../components/zimple";

const { combineValidators, required, mustBeEmail } = validation;

export default class zimpleformtest extends Component {
  handleSubmit = values => {
    if (values.email === "test@email.com") {
      return [{ message: "มีผู้ใช้อีเมล์นี้แล้ว" }];
    } else {
      return null;
    }
  };

  handleValidate = values => {
    const errors = {};
    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = "คุณยืนยันรหัสผ่านไม่ถูกต้อง";
    }
    return errors;
  };

  handleSuccess = ({ submitSucceeded }) => {
    if (submitSucceeded) {
      return "กรุณายืนยันทางอีเมล์";
    }
  };

  handleFeedback = ({ submitErrors }) => {
    return submitErrors[0].message;
  };

  handleConfirmPassword = () => {};

  renderForm = () => {
    return (
      <Card>
        <Form.Feedback
          failMessageTitle={"สมัครสมาชิกไม่สำเร็จ"}
          failMessage={this.handleFeedback.bind(this)}
          successMessageTitle={"สมัครสมาชิกสำเร็จ"}
          successMessage={this.handleSuccess.bind(this)}
        />
        <Form.Section>
          <Form.Field
            type="email"
            name="email"
            label="อีเมล์"
            placeholder="Email"
            full
            data-test="inputEmail"
            validate={combineValidators(
              required("กรุณาใส่ email"),
              mustBeEmail("คุณใส่ email ไม่ถูกต้อง")
            )}
          />
            <Form.Field
              type="password"
              name="password"
              data-test="inputPassword"
              label="รหัสผ่าน"
              full
              placeholder="Password"
              validate={required("กรุณาใส่รหัสผ่าน")}
            />
            <Form.Field
              type="password"
              data-test="inputPasswordConfirm"
              name="confirmPassword"
              label="ยืนยันรหัสผ่าน"
              full
              placeholder="Confirm Password"
            />
          <Form.Submit btStyle="primary" data-test="btnSubmit">SignUp</Form.Submit>
          
        </Form.Section>
      </Card>
    );
  };
  render() {
    return (
      <Form
        onSubmit={this.handleSubmit}
        validate={this.handleValidate.bind(this)}
      >
        {this.renderForm.bind(this)}
      </Form>
    );
  }
}
