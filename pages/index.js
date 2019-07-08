import App from "../components/App";
import Header from "../components/Header";
import { Component } from "react";
import { Mutation, withApollo } from "react-apollo";
import cookie from "cookie";
import gql from "graphql-tag";
import Router from "next/router";

class index extends Component {
  state = {
    // eslint-disable-next-line no-undef
    isLoggedIn: false,
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
  onClickPostButton = e => {
    Router.push({
      pathname: "/allposts"
    });
  };
  onClickSignOut = apolloClient => {
    this.setState({
      isLoggedIn: false
    });
    localStorage.removeItem("Token");
    localStorage.removeItem("User");
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });
    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    // test ci/cd
    apolloClient.cache.reset();
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
          ) : (
            <p>Hello, {JSON.parse(localStorage.getItem("User")).name}!</p>
          )}

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
          ) : (
            <p>Thanks for using</p>
          )}
          <div>
            {!this.state.isLoggedIn ? (
              <Mutation
                mutation={SIGN_IN}
                variables={{ email, password }}
                onCompleted={data => {
                  if (data.signIn !== null) {
                    localStorage.setItem("Token", data.signIn.token);
                    localStorage.setItem(
                      "User",
                      JSON.stringify(data.signIn.user)
                    );
                    this.setState({
                      isLoggedIn: true
                    });
                    document.cookie = cookie.serialize(
                      "token",
                      data.signIn.token,
                      {
                        maxAge: 30 * 24 * 60 * 60 // 30 days
                      }
                    );
                  } else {
                    alert('Invalid email or password')
                  }
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
            ) : (
              <button
                onClick={e => {
                  this.onClickSignOut(this.props.client);
                }}
              >
                Logout
              </button>
            )}

            {!this.state.isLoggedIn ? (
              <button onClick={e => this.onClickSignUp(e)}>Register</button>
            ) : (
              <p></p>
            )}
            {/* </Link>  */}
          </div>
          <button onClick={e => this.onClickPostButton(e)}>Posts</button>
        </div>
      </App>
    );
  }
}

export default withApollo(index);
