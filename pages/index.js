import App from "../components/App";
import Header from "../components/Header";
import { Component } from "react";
import { Mutation } from "react-apollo";
import cookie from 'cookie'
import gql from "graphql-tag";
import Router from "next/router";

class index extends Component {
  state = {
    // eslint-disable-next-line no-undef
    isLoggedIn: false,
    email: "",
    password: "",
    token: ""
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
  onClickPostButton = e => {
    Router.push({
      pathname: "/allposts"
    });
  };
  onClickSignOut = e => {
    this.setState({
      isLoggedIn: false
    })
    localStorage.removeItem('Token')
    localStorage.removeItem('User')
  };
  componentDidMount() {
    if (localStorage.getItem("Token") !== null) {
      this.setState({
        isLoggedIn: true
      });
    }
  }

  render() {
    const { email, password } = this.state;
    const SIGN_IN = gql`
      mutation signIn($email: String!, $password: String!) {
        signIn(email: $email, password: $password) {
          token
          user {
            id
            name
          }
        }
      }
    `;

    return (
      <App>
        <Header />
        <div className="form-field">
          {!this.state.isLoggedIn ? (
            <div>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  onChange={this.onChangeEmail}
                />
              </label>
            </div>
          ) : <p>Hello, {JSON.parse(localStorage.getItem('User')).name}!</p>}

          {!this.state.isLoggedIn ? (
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
          ) : <p>Thanks for using</p>}
          <div>
            {!this.state.isLoggedIn ? (
              <Mutation
              mutation={SIGN_IN}
              variables={{ email, password }}
              onCompleted={data => {
                localStorage.setItem("Token", data.signIn.token);
                localStorage.setItem("User", JSON.stringify(data.signIn.user));
                this.setState({
                  isLoggedIn: true
                })
                document.cookie = cookie.serialize('token', data.signIn.token, {
                  maxAge: 30 * 24 * 60 * 60 // 30 days
                })
                
              }}
            >
              {signIn => {
                return (
                  <button type="submit" onClick={signIn}>
                    Login
                  </button>
                );
              }}
            </Mutation>
            ) : <button onClick={e => {this.onClickSignOut(e)}}>Logout</button>}
            
            {!this.state.isLoggedIn ? (
              <button onClick={e => this.onClickSignUp(e)}>Register</button>
            ) : <p></p>}
            {/* </Link>  */}
          </div>
          <button onClick={e => this.onClickPostButton(e)}>Posts</button>
        </div>
        
      </App>
    );
  }
}

export default index;
