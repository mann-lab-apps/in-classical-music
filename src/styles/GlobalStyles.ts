import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-black: #000000;

    --color-blue-50: #E3F2FD;
    --color-blue-100: #BBDEFB;
    --color-blue-200: #90CAF9;
    --color-blue-300: #64B5F6;
    --color-blue-400: #42A5F5;
    --color-blue-500: #1971C2;
    --color-blue-600: #1565C0;
    --color-blue-700: #0D47A1;
    --color-blue-800: #083780;
    --color-blue-900: #042759;
    
    --color-green-50: #E8F5E8;
    --color-green-100: #C8E6C8;
    --color-green-200: #A5D6A7;
    --color-green-300: #81C784;
    --color-green-400: #66BB6A;
    --color-green-500: #2F9E44;
    --color-green-600: #2E7D32;
    --color-green-700: #1B5E20;
    --color-green-800: #0D4F1A;
    --color-green-900: #064014;
    
    --color-red-50: #FFEBEE;
    --color-red-100: #FFCDD2;
    --color-red-200: #EF9A9A;
    --color-red-300: #E57373;
    --color-red-400: #EF5350;
    --color-red-500: #E03131;
    --color-red-600: #D32F2F;
    --color-red-700: #C62828;
    --color-red-800: #B71C1C;
    --color-red-900: #8B0000;

    --color-orange-50: #FFF3E0;
    --color-orange-100: #FFE0B2;
    --color-orange-200: #FFCC80;
    --color-orange-300: #FFB74D;
    --color-orange-400: #FFA726;
    --color-orange-500: #FD7E14;
    --color-orange-600: #F57C00;
    --color-orange-700: #EF6C00;
    --color-orange-800: #E65100;
    --color-orange-900: #BF360C;

    --color-purple-50: #F3E5F5;
    --color-purple-100: #E1BEE7;
    --color-purple-200: #CE93D8;
    --color-purple-300: #BA68C8;
    --color-purple-400: #AB47BC;
    --color-purple-500: #9C36B5;
    --color-purple-600: #8E24AA;
    --color-purple-700: #7B1FA2;
    --color-purple-800: #6A1B9A;
    --color-purple-900: #4A148C;

    --color-gray-50: #FAFAFA;
    --color-gray-100: #F5F5F5;
    --color-gray-200: #EEEEEE;
    --color-gray-300: #E0E0E0;
    --color-gray-400: #BDBDBD;
    --color-gray-500: #9E9E9E;
    --color-gray-600: #757575;
    --color-gray-700: #616161;
    --color-gray-800: #424242;
    --color-gray-900: #212121;

    --space-0: 0px;
    --space-1: 4px;
    --space-2: 8px;
    --space-3: 12px;
    --space-4: 16px;
    --space-5: 20px;
    --space-6: 24px;
    --space-8: 32px;
    --space-10: 40px;
    --space-12: 48px;
    --space-16: 64px;
    --space-20: 80px;
    --space-24: 96px;
    --space-32: 128px;
    --space-40: 160px;
    --space-48: 192px;

    --space-xs: 4px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
    --space-xl: 32px;
    --space-2xl: 48px;
    --space-3xl: 64px;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  
  body {
    line-height: 1;
  }
  
  ol, ul {
    list-style: none;
  }
  
  blockquote, q {
    quotes: none;
  }
  
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;
