import { createTheme } from "@mui/material/styles";
const palette = {
    primary: {
        main: "#fc00ff",
    },
    secondary: {
        main: '#000',
    }
}
const theme = createTheme({
    palette: palette,
    typography: {
        h1: {
            fontSize: 64
        },
        body1: {
            fontWeight: 500,
            fontSize: 20,
            lineHeight: 2,
            fontFamily: 'Inter',
            fontStyle: 'italic'
        }
    },
    components: {

        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'unset',
                    boxShadow: 'unset',
                    borderRadius: "24px"
                },
                containedPrimary: {
                    fontWeight: 600,
                    color: palette?.secondary?.main,
                    borderRadius: "4px"
                },

            }
        }
    }
});

export default theme