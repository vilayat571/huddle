import styled from "styled-components";

export const CardStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 40px 0px;
  border-radius: 2px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
  padding: 60px;
  background-color: #fff;
  flex-direction: ${({ layout }) => layout};
  & > div {
    flex: 1;
  }
  img {
    width: 80%;
  }
  @media (max-width: ${({ theme }) => theme.responsive.mobile}) {
    flex-direction: column;
    & > div h2,
    p {
      text-align: center;
    }
  }
`;
