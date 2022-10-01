import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

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

export default Global;
