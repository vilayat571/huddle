import { Button } from "../styled/Buton.styled";
import { Container } from "../styled/Container.styled";
import { HeaderStyled ,Nav,Logo} from "../styled/Header.styled";


function Header() {
  return (
    <HeaderStyled>
      <Container>
        <Nav>
          <Logo src={"./images/logo.svg"} alt={"logo appearance"} />
          <Button>Try It Free</Button>
        </Nav>
      </Container>
    </HeaderStyled>
  );
}

export default Header;
