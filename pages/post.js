import React, { Component } from "react";
import App from "../components/App";
import Header from "../components/Header";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { withRouter } from 'next/router'

export const singlePostQuery = gql`
  query post($id: ID!) {
    post(id: $id){
      title
      UserId
    }
  }
`;

class Post extends Component {
  render() {
    // console.log('query', this.props.router.query)
    const singlePostQueryVar = {
      id: this.props.router.query.id
    }
    return (
      <div>
        <App>
          <Header />
          <div>
            <Query
              query={singlePostQuery}
              variables= {singlePostQueryVar}
            >
              {({ data, loading, error }) => {
                  
                if (loading) return <div>Loading</div>;
                // console.log("single", data);
            

                return (
                  <section>
                    <h2>{data.post.title}</h2>
                    <h3>UserId: {data.post.UserId}</h3>
                    <style jsx>{`
                      section {
                        padding-bottom: 20px;
                      }
                      li {
                        display: block;
                        margin-bottom: 10px;
                      }
                      div {
                        align-items: center;
                        display: flex;
                      }
                      a {
                        font-size: 14px;
                        margin-right: 10px;
                        text-decoration: none;
                        padding-bottom: 0;
                        border: 0;
                      }
                      span {
                        font-size: 14px;
                        margin-right: 5px;
                      }
                      ul {
                        margin: 0;
                        padding: 0;
                      }
                      button:before {
                        align-self: center;
                        border-style: solid;
                        border-width: 6px 4px 0 4px;
                        border-color: #ffffff transparent transparent
                          transparent;
                        content: "";
                        height: 0;
                        margin-right: 5px;
                        width: 0;
                      }
                    `}</style>
                  </section>
                );
              }}
            </Query>
          </div>
        </App>
      </div>
    );
  }
}

export default withRouter(Post);
