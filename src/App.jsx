import { ThemeProvider } from "styled-components";
import Header from "./components/regularcomponents/Header";
import { Container } from "./components/styled/Container.styled";
import { GlobalStyles } from "./components/styled/Global";

function App() {

  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      fotter: "#003333",
    },
  };
  
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <h1>Hello World!</h1>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
