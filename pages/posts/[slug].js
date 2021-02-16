import { Typography } from "@material-ui/core"
import { getAllPosts, getPostBySlug } from "../../lib/graphcms"

export default function Post({ post }) {
  return <Typography variant="subtitle1">{post.title}</Typography>
}

export async function getStaticProps({ params }) {
  const data = await getPostBySlug(params.slug)

  return {
    props: { post: data },
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}
