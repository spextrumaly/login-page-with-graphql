import { Component } from "react";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import redirect from "../lib/redirect";

export default class RegisterBox extends Component {
  state = {
    email: "asda",
    name: "asdasd",
    age: 1,
    password: "weqwe"
  };

  onChangeEmail = e => {
    // console.log("onChangeEmail ::", e.target.value);
    this.setState({ email: e.target.value });
  };

  onChangeName = e => {
    // console.log("onChangeName ::", e);
    this.setState({ name: e.target.value });
  };

  onChangeAge = e => {
    // console.log("onChangeAge ::", e);
    this.setState({ age: parseInt(e.target.value)});
  };

  onChangePassword = e => {
    // console.log("onChangePassword ::", e);
    this.setState({ password: e.target.value });
  };

  render() {
    const { email, name, age, password } = this.state;
    // console.log('state::', this.state);
    const SIGN_UP = gql`
      mutation signUp($name: String!, $email: String!, $password: String!, $age: Int!){
        signUp(
          name: $name
          email: $email
          password: $password
          age: $age
        )
      }
    `;

    return (
      <div className="form-field">
        {/* <form onSubmit={(e) => signUp(e)}> */}
        <div>
          <label>
            Email:
            <input type="email" name="email" onChange={this.onChangeEmail} />
          </label>
        </div>
        <div>
          <label>
            Name:
            <input type="text" name="email" onChange={this.onChangeName} />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input type="number" name="email" onChange={this.onChangeAge} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              name="password"
              onChange={this.onChangePassword}
            />
          </label>
        </div>
        <div>
          {/* <Link href="/register"> */}
          <Mutation 
            mutation={SIGN_UP} 
            variables={{ email, name, age, password }}
            onCompleted={(data) => {
              if (data !== null) {
                alert('Success!!')
                redirect({}, "/")
              } else {
                alert('Incorrect input!!')
              }
            }}>
            {signUp => 
              <button type="submit" onClick={signUp}>
                Submit
              </button>
            }
          </Mutation>
        </div>
      </div>
    );
  }
}
