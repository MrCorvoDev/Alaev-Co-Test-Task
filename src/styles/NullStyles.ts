import {css} from 'styled-components';

const NullStyles = css`
   * {
      padding: 0;
      margin: 0;
      border: 0;
      box-sizing: border-box;
   }
   *:before,
   *:after {
      box-sizing: border-box;
   }
   html {
      font-synthesis: none;
      text-rendering: optimizeSpeed;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-size-adjust: 100%;
   }
   html,
   :has(:target) {
      scroll-behavior: smooth;
   }
   body {
      line-height: 1;
      min-height: 100vh;
   }
   a,
   span,
   label,
   em,
   strong,
   i,
   img,
   *:before,
   *:after {
      display: inline-block;
   }
   aside,
   nav,
   main,
   footer,
   header,
   section,
   input,
   textarea,
   picture,
   video,
   canvas,
   svg,
   details {
      display: block;
   }
   img {
      vertical-align: top;
   }
   input,
   button,
   textarea,
   select {
      font: inherit;
   }
   textarea {
      resize: vertical;
   }
   button,
   a {
      color: inherit;
      cursor: pointer;
      background-color: transparent;
      user-select: none;
   }
   button::-moz-focus-inner {
      padding: 0;
      border: 0;
   }
   button,
   [type='button'],
   [type='reset'],
   [type='submit'] {
      -webkit-appearance: button;
   }
   a,
   a:hover,
   a:visited {
      text-decoration: none;
   }
   li {
      list-style: none;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   p {
      font-weight: inherit;
      font-size: inherit;
      overflow-wrap: break-word;
   }
   p {
      text-wrap: pretty;
   }
   h1,
   h2,
   h3,
   h4,
   h5,
   h6 {
      text-wrap: balance;
   }
   #root,
   #__next {
      isolation: isolate;
   }
   em {
      font-variation-settings: 'slnt' -10;
   }
   @media (prefers-reduced-motion: reduce) {
      html,
      :has(:target) {
         scroll-behavior: auto;
      }
      *,
      *::before,
      *::after {
         animation-duration: 0.01ms !important;
         animation-iteration-count: 1 !important;
         scroll-behavior: auto !important;
         transition-duration: 0.01ms !important;
      }
   }
`;

export default NullStyles;
