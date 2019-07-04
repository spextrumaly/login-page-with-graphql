import App from "../components/App";
import Header from "../components/Header";
import { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Link from "next/link";
import PostList from "../components/PostList";
import Router from "next/router";

class index extends Component {
  state = {
    // eslint-disable-next-line no-undef
    isLoggedIn: true,
    email: "",
    password: ""
  };
  onChangeEmail = e => {
    // console.log("onChangeEmail ::", e.target.value);
    this.setState({ email: e.target.value });
  };
  onChangePassword = e => {
    // console.log("onChangePassword ::", e);
    this.setState({ password: e.target.value });
  };
  onClickSignUp = e => {
    Router.push({
      pathname: "/register"
    });
  };

  render() {
    const { email, password } = this.state;
    const SIGN_IN = gql`
    mutation signIn($email: String!, $password: String!){
      signIn(
        email: $email
        password: $password
      )
    }
  `;
    return (
      <App>
        <Header />
        <div className="form-field">
          <div>
            <label>
              Email:
              <input type="email" name="email" onChange={this.onChangeEmail} />
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
              mutation={SIGN_IN}
              variables={{ email, password }}
            >
              {signIn => (
                <button type="submit" onClick={signIn}>
                  Login
                </button>
              )}
            </Mutation>
            <button onClick={e => onClickSignUp(e)}>Register</button>
            {/* </Link>  */}
          </div>
        </div>
        {this.state.isLoggedIn ? (
          <PostList />
        ) : (
          <p>Please Login to see posts</p>
        )}
      </App>
    );
  }
}

export default index;
