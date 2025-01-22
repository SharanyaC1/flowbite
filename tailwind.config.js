const { buildQueries } = require("@testing-library/react");

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode :'class',
  theme: {
    extend: {
      screen : 
      {
        "other" : {'min':'340px','max':'1200px'},
    },
    colors :
    {
       "darkbackground": "#5875B5",
    blue :
    {
      850 : "#14b8a6"
    }
    }
    },
  },
   
  plugins: [],

}
