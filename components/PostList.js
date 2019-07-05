import { Mutation, Subscription } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import redirect from "../lib/redirect";
import Link from "next/link";

export const allPostsQuery = gql`
  subscription postsOfUser($id: ID!) {
    postsOfUser(id: $id) {
      posts {
        id
        title
        UserId
      }
    }
  }
`;

export const DELETE_POST = gql`
  mutation deletePost($id: ID!) {
    deletePost(id: $id)
  }
`;
export default function PostList() {
  const userId = {
    id: JSON.parse(localStorage.getItem("User")).id
  };
  return (
    <Subscription subscription={allPostsQuery} variables={userId}>
      {({ data, loading, error }) => {
        console.log("data::", data);
        console.log("loading::", loading);
        if (error) return <ErrorMessage message="Error loading posts." />;
        if (loading) return <div>Loading</div>;
        console.log("post::", data.postsOfUser[0].posts);
        const posts = data.postsOfUser[0].posts.map((post, index) => {
          const queryVar = {
            id: post.id
          };
          return (
            <li>
              <Link as={`/post/${post.id}`} href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
              <Mutation
                mutation={DELETE_POST}
                variables={queryVar}
                onCompleted={() => {
                  alert("Deleted!!");
                  redirect({}, "/");
                }}
              >
                {deletePost => (
                  <button className="deleteBtn" type="submit" onClick={deletePost}>
                    X
                  </button>
                )}
              </Mutation>
            </li>
          );
        });

        return (
          <section>
            <h3>Your posts:</h3>
            <ul>{posts}</ul>
            <style jsx>
              {`
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
                  border-color: #ffffff transparent transparent transparent;
                  content: "";
                  height: 0;
                  margin-right: 5px;
                  width: 0;
                }
              `}
            </style>
          </section>
        );
      }}
    </Subscription>
  );
}
