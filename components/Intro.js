import { AVATAR_BASE_URL } from "@/constants"
import { Box, Container, makeStyles, Typography, Link } from "@material-ui/core"
import Image from "next/image"
import { generate } from "shortid"

function generateAvatarParams() {
  return "top[]=shortHair&facialHairChance=70&clothes[]=shirt&clothes[]=hoodie&mouth[]=smile&mouth[]=twinkle&eyes[]=happy&eyes[]=wink&eyes[]=hearts&eyebrow[]=raised&eyebrow[]=up"
}

let useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "70%",
  },
  header: {
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(200px, 1fr) )",
    gridGap: theme.spacing(4),
    margin: "0 auto 3em auto",
  },
  imgContainer: {
    borderRadius: "50%",
    width: "200px",
    height: "200px",
    backgroundImage: "linear-gradient(#ff9d2f, #ff6126)",
    alignSelf: "center",
    textAlign: "center",
    "@media (max-width: 700px)": {
      order: "-1",
      maxWidth: "50px",
      maxHeight: "50px",
      position: "absolute",
      left: "10px",
      transform: "translateY(10px)",
    },
  },
  introText: {
    maxWidth: "70ch",
    // margin: "0 auto",
  },
}))

export default function Intro() {
  let classes = useStyles()
  return (
    <Container className={classes.root}>
      <Box className={classes.header}>
        <Box>
          <Typography variant="h1">Hi, I am Alejandro</Typography>
          <Typography variant="subtitle1">Front-end Developer</Typography>
        </Box>
        <Box className={classes.imgContainer}>
          <Image
            src={`${AVATAR_BASE_URL}${generate()}.svg?${generateAvatarParams()}`}
            width={300}
            height={300}
          />
        </Box>
      </Box>
      <Box className={classes.introText}>
        <Typography>
          Hi, my name is Alejandro Desalvo. I am a frontend developer. I live in
          Berlin since 2019. I code in HTML, CSS, Javascript and React.js. In
          the past I used to code PHP / MySQL but today I find much more fun
          Javascript libraries like React.js. I love playing and studying music.
        </Typography>
        <Typography>
          This site is still being built so, hopefully soon you'll be able to
          see some more of my works. In the mean time you can take a look at my{" "}
          <Link href="https://github.com/al3des" rel="noopener" target="_blank">
            GitHub
          </Link>
        </Typography>
      </Box>
    </Container>
  )
}
