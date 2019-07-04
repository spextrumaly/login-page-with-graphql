import { Query } from "react-apollo";
import gql from "graphql-tag";
import ErrorMessage from "./ErrorMessage";
import Link from "next/link";

export const allPostsQuery = gql`
  query postsOfUser($id: ID!){
    postsOfUser(id: $id) {
      posts {
        id
        title
        UserId
      }
    }
  }
`;
export default function PostList() {
  const userId = {
    id: JSON.parse(localStorage.getItem('User')).id
  }
  return (
    <Query query={allPostsQuery} variables={userId}>
      {({ data, loading, error }) => {
        if (error) return <ErrorMessage message="Error loading posts." />;
        if (loading) return <div>Loading</div>;
        // console.log(data.postsOfUser[0].posts);
        const posts = data.postsOfUser[0].posts.map((post, index) => {
          return (
            <li>
              <Link as={`/post/${post.id}`} href={`/post?id=${post.id}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          );
        });

        return (
          <section>
            <h3>Your posts:</h3>
            <ul>{posts}</ul>
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
                border-color: #ffffff transparent transparent transparent;
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
  );
}
