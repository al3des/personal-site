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
import { generate } from "shortid"

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
        <title>Alejandro Desalvo | Frontend Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          property="og:title"
          content="Alejandro Desalvo | Frontend Developer"
          key="title"
        />
        <meta
          property="og:description"
          content="Frontend Developer. CSS, HTML, JS, React.js"
        />
        <meta property="og:url" content="https://al3des.dev/" />
        <meta
          property="og:image"
          content={`https://avatars.dicebear.com/api/avataaars/${generate()}.svg?w=600&h=600&top[]=shortHair&facialHairChance=70&clothes[]=shirt&clothes[]=hoodie&mouth[]=smile&mouth[]=twinkle&eyes[]=happy&eyes[]=wink&eyes[]=hearts&eyebrow[]=raised&eyebrow[]=up`}
        />
        <meta property="og:image:with" content="600" />
        <meta property="og:image:height" content="600" />
        <meta property="og:type" content="website" />
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
