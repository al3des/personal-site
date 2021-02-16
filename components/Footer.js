import { Container, makeStyles, Link } from "@material-ui/core"
import GitHubIcon from "@material-ui/icons/GitHub"
import TwitterIcon from "@material-ui/icons/Twitter"
import EmailIcon from "@material-ui/icons/Email"

let useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    "& > *": {
      marginRight: "1em",
    },
    padding: theme.spacing(4),
  },
}))

export default function Footer() {
  let classes = useStyles()
  return (
    <footer>
      <Container className={classes.root}>
        <Link
          href="https://github.com/al3des"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <GitHubIcon />
        </Link>
        <Link
          href="https://twitter.com/al3des"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <TwitterIcon />
        </Link>
        <Link
          href="mailto:alejandrodesalvo@gmail.com"
          color="inherit"
          rel="noopener"
          target="_blank"
        >
          <EmailIcon />
        </Link>
      </Container>
    </footer>
  )
}
