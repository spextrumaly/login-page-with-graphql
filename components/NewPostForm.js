import { Component } from "react";
import gql from "graphql-tag";
import redirect from '../lib/redirect'
import { Mutation } from "react-apollo";

export default class NewPostForm extends Component {
  state = {
    title: '',
    UserId: parseInt(JSON.parse(localStorage.getItem('User')).id)
  };
  
  onChangeTitle = e => {
    // console.log("onChangeName ::", e);
    this.setState({ title: e.target.value });
  };


  render() {
    const { title, UserId } = this.state;
    // console.log('state::', this.state);
    const NEW_POST = gql`
      mutation newPost($title: String!, $UserId: Int!){
        newPost(
          title: $title
          UserId: $UserId
        )
      }
    `;

    return (
      <div className="form-field">
        {/* <form onSubmit={(e) => signUp(e)}> */}
        <div>
          <label>
            Title:
            <input type="text" name="title" onChange={this.onChangeTitle} />
          </label>
        </div>
        <div>
          {/* <Link href="/register"> */}
          <Mutation 
            mutation={NEW_POST} 
            variables={{ title, UserId }}
            onCompleted={() => {
              alert('Posted!!')
              redirect({}, "/");
            }}>
            {newPost => 
              <button type="submit" onClick={newPost}>
                Submit
              </button>
            }
          </Mutation>
        </div>
      </div>
    );
  }
}
