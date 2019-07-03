import App from "../components/App";
import Header from "../components/Header";
import { Component } from "react";
import Link from "next/link";
import PostList from "../components/PostList";

export default class index extends Component {
  signUp() {
    console.log("test");
  }
  render() {
    return (
      <App>
        <Header />
        <div className="form-field">
            <div>
              <label>
                Email:
                <input type="text" name="email" />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input type="password" name="password" />
              </label>
            </div>
            <div>
              {/* <Link href="/register"> */}
                <button onClick={this.signUp()}>Login</button>
                <button onClick={this.signUp()}>Register</button>
              {/* </Link>  */}
            </div>
        </div>
				<PostList />
      </App>
    );
  }
}
