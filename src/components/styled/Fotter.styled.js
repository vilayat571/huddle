import styled from "styled-components";

export const FotterStyled = styled.footer`
  background-color: ${({ theme }) => theme.colors.fotter};
  color: #fff;
  padding: 100px 0px 60px;
  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }

  p {
    text-align: right;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    ul {
      padding: 0px;
    }
    p {
      text-align: center;
    }
  }
`;
