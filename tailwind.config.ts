import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "361px",
        sm: "601px",
        md: "901px",
        lg: "1101px",
        xl: "1441px",
        k: "1028px",
      },
      colors: {
        // strilherezh
        white: "#ffffff",
        primary: {
          DEFAULT: "#87CEFA",
        },
        primary60: {
          DEFAULT: "#87CEFA60",
        },
        primary40: {
          DEFAULT: "#87CEFA40",
        },
        primary20: {
          DEFAULT: "#87CEFA20",
        },
        primary10: {
          DEFAULT: "#87CEFA10",
        },


        
        blue: {
          DEFAULT: "#003D75",
        },
        cyan: {
          DEFAULT: "#33CEF1",
        },
        
        black: {
          DEFAULT: "#525C74",
        },
        gray: {
          DEFAULT: "#6C839A",
        },
        gray60: {
          DEFAULT: "#6C839A60",
        },
        gray40: {
          DEFAULT: "#6C839A40",
        },
        gray20: {
          DEFAULT: "#6C839A20",
        },
        gray10: {
          DEFAULT: "#6C839A10",
        },
        lightgray: {
          DEFAULT: "#E3E3E3",
        },
        whitegray: {
          DEFAULT: "#F4F4F4",
        },

        //TEXT 
        lightblue: {
          DEFAULT: "#00284D",
        },
        midgray: {
          DEFAULT: "#00284D",
        }
      },
      brightness: {
        25: ".25",
        30: ".30",
      },  
      borderRadius: {
        DEFAULT: "2px",
        full: "9999px",
      },
      fontFamily: {
        noto: ["Noto Serif JP", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "header-gradiant-linear": 
        "linear-gradient(0deg, #FFFFF20 0%, #FFFFFF 20%)",
        "radial-white-sellcard": 
        "radial-gradient(circle, rgba(255,255,255,1) 51%, rgba(255,255,255,0.20351890756302526) 100%)",
        "sellcard-background": "url('/public/img/sellcard-background.webp') lightgray 50% / cover no-repeat, #FFF",
        "home-product-gradient": " linear-gradient(0deg, rgba(255,255,255,0.8029586834733894) 0%, rgba(255,255,255,1) 55%)",
        "radial-footer":
        "radial-gradient(131.94% 97.81% at 50% 0.07%, #FFF 40%, rgba(255, 255, 255, 0.00) 100%)",
      },
      boxShadow: {
        "button-shadow-hover": "0px 0px 30px 7px rgba(144, 235, 253, 0.80)",
        "sellcard-boxshadow": "-1px 4px 20px 0px rgba(108, 131, 154, 0.20);",
        "sellcard-boxshadow-hover": "-1px 4px 20px 0px rgba(135, 206, 250, 0.50)",
        "header-white-inner": "0px 62px 40px -18px rgba(255,255,255,1) inset",
        "home-products-white": "1px -92px 49px 36px rgba(255,255,255,1)",
        "vector-shadow": "-1px -92px 53px 26px rgba(255,255,255,1)",
      }
    },
  },
  plugins: [],
};
export default config;
