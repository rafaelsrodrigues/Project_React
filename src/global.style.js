import { createGlobalStyle } from 'styled-components';
import MarkPro from './assets/fonts/Mark-Pro.woff';
import MarkProBold from './assets/fonts/Mark-Pro-bold.woff';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    @font-face {
        font-family: 'Mark Pro';
        src: local('Mark Pro'),url(${MarkPro}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Mark Pro Bold';
        src: local('Mark Pro Bold'),url(${MarkProBold}) format('woff');
        font-weight: 700;
        font-style: normal;
    }
`;
