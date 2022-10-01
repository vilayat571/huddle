import { ThemeProvider } from "styled-components";
import Card from "./components/regularcomponents/Card";
import Fotter from "./components/regularcomponents/Fotter";
import Header from "./components/regularcomponents/Header";
import { Container } from "./components/styled/Container.styled";
import Global from "./components/styled/Global";
import content from "./content";

function App() {
  const theme = {
    colors: {
      header: "#ebfbff",
      body: "#fff",
      fotter: "#003333",
    },
    responsive: {
      mobile: "768px",
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <Global />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Fotter />
      </>
    </ThemeProvider>
  );
}

export default App;
