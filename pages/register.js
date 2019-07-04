import App from "../components/App";
import Header from "../components/Header";
import { Component } from "react";
import RegisterBox from "../components/RegisterBox";

export default class index extends Component {
  signUp() {
    // console.log("test");
  }
  signIn() {
    // console.log("test");
  }
  state = {
    // eslint-disable-next-line no-undef
    isLoggedIn: true
  }
  
  render() {
    return (
      <App>
        <Header />
        <RegisterBox />
      </App>
    );
  }
}
