import React from "react";
import { makeStyles, ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import Header from "./components/Header";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { AppToaster } from "./components/Toastr";
import { colors, fonts } from "./theme";
import "react-toastify/dist/ReactToastify.css";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: { main: colors.accent },
    background: { default: colors.bg, paper: colors.bgCard },
    text: { primary: colors.text, secondary: colors.textMuted },
  },
  typography: {
    fontFamily: fonts.sans,
  },
});

const useStyles = makeStyles({
  root: {
    minHeight: "100vh",
    background: colors.bg,
  },
});

function App() {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <AppToaster />
        <Header />
        <About />
        <Skills />
        <Projects />
        <ContactForm />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
