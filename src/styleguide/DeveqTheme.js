import { createTheme } from "@mui/material";

export const DeveqTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 744,
      md: 1025,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    // background: {
    //   default: 'rgb(28, 121, 156)',
    // },
    primary: {
      main: "rgb(28, 121, 156)",
    },
    secondary: {
      main: "#64f5e9",
    },
    success: {
      main: '#64f5b1',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: 500,
          borderRadius: "8px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: `"Lato", arial, sans-serif`,
          textAlign: 'center'
        },
        h1: {
          fontSize: "64px",
          textTransform: "uppercase"
        },
        h2: {
          fontSize: "56px"
        },
        h3: {
          fontSize: "48px"
        },
        h4: {
          fontSize: "40px"
        },
        h5: {
          fontSize: "32px"
        },
        h6: {
          fontSize: "22px"
        },
        body1: {
          fontSize: "16px"
        },
        body2: {
          fontSize: "14px"
        },
      },
    }
  }
});