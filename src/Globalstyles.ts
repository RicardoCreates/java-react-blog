import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   body {
     font-family: Arial, sans-serif;
     margin: 0;
     padding: 0;
     background-color: #f0f0f0;
     transition: background-color 0.3s ease;
   }
   

   main {
     padding: 20px;
     max-width: 800px;
     margin: 80px auto;
     background-color: white;
     border-radius: 8px;
     box-shadow: 0 0 10px rgba(0,0,0,0.1);
   }
   
 `;

export default GlobalStyles;
