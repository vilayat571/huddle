import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
  }
`;

export const Logo = styled.img`
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    margin-bottom: 40px;
  }
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    margin: 40px 0px 30px;
  }
`;
