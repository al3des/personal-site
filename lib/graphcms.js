async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })
  const json = await res.json()

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID)
    console.error(json.errors)
    throw new Error("Failed to fetch API")
  }

  return json.data
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(`
      {
        posts {
          slug
        }
      }
    `)
  return data.posts
}

export async function getPostBySlug(slug) {
  const data = await fetchAPI(
    `
  query PostBySlug($slug: String!, $stage: Stage!) {
    post(stage: $stage, where: {slug: $slug}) {
      title
      slug
      content {
        html
      }
      
      }
    }
  `,
    {
      variables: {
        stage: "PUBLISHED",
        slug,
      },
    }
  )

  return data.post
}

export async function getAllPosts() {
  const data = await fetchAPI(`
      {
        posts {
          id
          title
          slug
        }
      }
    `)
  return data.posts
}
