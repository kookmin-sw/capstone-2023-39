import { createGlobalStyle } from "styled-components";
import AppleSDGothicNeoL from "./AppleSDGothicNeoL.ttf";
import AppleSDGothicNeoM from "./AppleSDGothicNeoM.ttf";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'GangwonEduPowerExtraBoldA';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/GangwonEduPowerExtraBoldA.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    @font-face {
        font-family: "AppleSDGothicNeoL";
        src: local("AppleSDGothicNeoL"),
        url(${AppleSDGothicNeoL}) format('woff');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: "AppleSDGothicNeoM";
        src: local("AppleSDGothicNeoM"),
        url(${AppleSDGothicNeoM}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
