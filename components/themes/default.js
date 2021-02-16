import { createMuiTheme } from "@material-ui/core"

export const theme = createMuiTheme({
  typography: {
    h1: {
      "@media (max-width: 1100px)": {
        fontSize: "4rem",
      },
    },
    subtitle1: {
      fontSize: "2rem",
    },
  },
})
