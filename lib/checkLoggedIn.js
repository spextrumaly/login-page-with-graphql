import gql from 'graphql-tag'

export default apolloClient =>
  apolloClient
    .query({
      query: gql`
        query getUser {
          me {
            id
            name
            email
          }
        }
      `
    })
    .then(({ data }) => {
      // console.log('data::', data)
      return { loggedInUser: data }
    })
    .catch((e) => {
      // console.log('catch::', e)
      // Fail gracefully
      return { loggedInUser: {} }
    })
