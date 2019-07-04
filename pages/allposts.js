import React from 'react'
import cookie from 'cookie'
import { ApolloConsumer } from 'react-apollo'
import PostList from '../components/PostList'
import Header from '../components/Header'
import redirect from '../lib/redirect'
import checkLoggedIn from '../lib/checkLoggedIn'

export default class AllPosts extends React.Component {
  static async getInitialProps (context, apolloClient) {
    const { loggedInUser } = await checkLoggedIn(context.apolloClient)
    console.log('loggedInUser::', loggedInUser)

    if (!loggedInUser.user) {
      // If not signed in, send them somewhere more useful
      redirect(context, '/')
    }

    return { loggedInUser }
  }

  signout = apolloClient => () => {
    document.cookie = cookie.serialize('token', '', {
      maxAge: -1 // Expire the cookie immediately
    })

    // Force a reload of all the current queries now that the user is
    // logged in, so we don't accidentally leave any state around.
    apolloClient.cache.reset().then(() => {
      // Redirect to a more useful page when signed out
      redirect({}, '/')
    })
  }

  render () {
    return (
      <ApolloConsumer>
        <App>
        <Header />
        {client => (
          <div>
            Hello Test!<br />
            <PostList />
            <button onClick={this.signout(client)}>Sign out</button>
          </div>
        )}
        </App>
      </ApolloConsumer>
    )
  }
}
