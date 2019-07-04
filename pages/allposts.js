import React from "react";
import cookie from "cookie";
import { withApollo } from "react-apollo";
import PostList from "../components/PostList";
import App from "../components/App";
import Header from "../components/Header";
import redirect from "../lib/redirect";
import checkLoggedIn from "../lib/checkLoggedIn";

class AllPosts extends React.Component {
  static async getInitialProps(context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient);
    console.log("loggedInUser::", loggedInUser);

    if (!loggedInUser.me) {
      // If not signed in, send them somewhere more useful
      alert('Please Login')
      redirect(context, "/");
    }

    return { loggedInUser };
  }

  signout = apolloClient => () => {
    localStorage.removeItem('Token')
    document.cookie = cookie.serialize("token", "", {
      maxAge: -1 // Expire the cookie immediately
    });

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, "/");
    });
  };

  render() {
    // console.log(this.props.client);
    // return null;
    return (
      <App>
          <Header />
            <div>
              Hello Test!
              <br />
              {/* <PostList /> */}
              <button onClick={this.signout(this.props.client)}>Sign out</button>
            </div>
      </App>
    );
  }
}


export default  withApollo(AllPosts)