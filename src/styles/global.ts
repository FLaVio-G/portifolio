import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

:root {
    --background: #202833;

}
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;
}

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; //15
 
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14
    }
}

body, input, textarea, button {
    font: 'Merriweather Sans', sans-serif;
    font-weight: 400;
}

h1, h2 , h3, h4, h5, h6,div, link{
    
    font-family: 'Merriweather Sans', sans-serif;
    font-weight: 400;
}


body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
}

button { 
    cursor: pointer;
}

[disabled] {
    opacity:0.6;
    cursor: not-allowed;
}


`