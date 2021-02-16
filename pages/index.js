import Head from "next/head"
import {
  Container,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core"
import { getAllPostsWithSlug } from "../lib/graphcms"
import Intro from "@/components/Intro"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import { theme } from "@/components/themes/default"

let useStyles = makeStyles({
  root: {
    height: "100vh",
    maxHeight: "100vh",
    display: "grid",
    gridTemplateAreas: `"header" 
                        "main"
                        "footer"`,
    gridTemplateRows: "auto 1fr auto",
  },
  header: {
    gridArea: "header",
  },
  main: {
    gridArea: "main",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    gridArea: "footer",
  },
})

export default function Home({ posts }) {
  let classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <Container className={classes.root}>
        <CssBaseline />
        <Nav />
        <div className={classes.main}>
          <Intro />
        </div>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}

export async function getStaticProps({ preview = false }) {
  const posts = (await getAllPostsWithSlug(preview)) || []
  return {
    props: { posts, preview },
  }
}
