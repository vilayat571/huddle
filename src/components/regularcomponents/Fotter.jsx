import { Container } from "../styled/Container.styled";
import { Flex } from "../styled/Flex.styled";
import { FotterStyled } from "../styled/Fotter.styled";

function Fotter() {
  return (
    <FotterStyled>
      <div>
        <Container>
          <img src={"./images/logo_white.svg"} alt={"logo appearance"} />
          <Flex>
            <ul>
              <li>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </li>
              <li>+1-543-123-4567</li>
              <li>example@huddle.com</li>
            </ul>
            <ul>
              <li>About Us</li>
              <li>What We Do</li>
              <li>FAQ</li>
            </ul>

            <ul>
              <li>Career</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
            {/* Social Icons */}
          </Flex>
          <p>&copy; 2022 Huddle. Powered by Vilayat Safarov.</p>
        </Container>
      </div>
    </FotterStyled>
  );
}

export default Fotter;
