import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');


*{
    box-sizing: border-box;
}

body{
    background-color: ${({ theme }) => theme.body};
    color: hsl(192,100%,9%);
    font-family: 'Nunito',sans-serif;
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
