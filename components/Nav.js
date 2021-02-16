import { AppBar, Container, Toolbar, Typography } from "@material-ui/core"
import { SITE_NAME } from "@/constants"

export default function Nav() {
  return (
    <>
      <AppBar color="inherit">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6">{SITE_NAME}</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}
