/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
    },
    colors: {
      textColor: '#968750',
      stone: '#a1a1aa',
      bgColor: '#bf281d',
      hoverColor: '#cab287',
      textBg: "#2e2b2b",
      navbarColor: '#0e115e',
      gray:'#808080',
      imageBg: "#131518",
      aboutColor: "#66562b",
      aboutColor2: "#826924",
    }
  },
  plugins: [
    require('tailwindcss-animated'),
  ],
}

// 040E14
