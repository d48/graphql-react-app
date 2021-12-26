const githubQuery = (pageCount, queryString, paginationKeyword, paginationString) => {
  return {
    query: `
      {
        viewer {
          name
        }
        search(query: "${queryString} user:d48 sort:updated-desc", type: REPOSITORY, ${paginationKeyword}: ${pageCount}, ${paginationString}) {
          repositoryCount
          edges {
            node {
              ... on Repository {
                name
                description
                id
                url
                viewerSubscription
                licenseInfo {
                  spdxId
                }
              }
            }
          }
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
        }
      }
    `
  }
}

export default githubQuery;