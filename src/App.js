import "./App.css";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./utils/Themes";
import Navbar from "./components/navbar";
import Hero from "./components/HeroSection";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  position: relative;
`;

const AmbientGlowWrapper = styled.div`
  position: relative;
  width: 100%;
  background: radial-gradient(
      circle at 10% 30%,
      rgba(199, 44, 72, 0.08) 0%,
      transparent 40%
    ),
    radial-gradient(
      circle at 90% 70%,
      rgba(232, 213, 163, 0.06) 0%,
      transparent 40%
    );
`;

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Router>
        <Body>
          <Navbar />
          <Hero />
          <AmbientGlowWrapper>
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
          </AmbientGlowWrapper>
          <Footer />
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
