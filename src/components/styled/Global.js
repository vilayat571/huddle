import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

*{
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.body};
    color: hsl(192,100%,9%);
    font-family: 'Poppins',sans-serif;
    font-size: 1.15em;
}

p{
    opacity: 0.6;
    line-height: 1.5;
}
img{
    max-width: 100%;
}
`;
