import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        smi: "0.625rem",
        smii: ".688rem",
        smiii: ".7rem",
        smiv: ".813rem",
        smv: ".875rem",
        smvi: ".938rem",
        smvii: "1rem",
      },
      colors: {
        "division-primary": "#ebebeb",
        "action-secondary": "rgb(50,104,145)",
        "action-primary": "rgb(86,123,149)",
        "stroke-quartenary": "hsla(0,0%,87.46%,1)",
        "background-elevated": "hsla(0,0%,100%,1)",
        "background-primary": "hsla(0,0%,100%,1)",
        "background-quaternary": "hsla(0,0%,78.04%,1)",
        "background-secondary": "hsla(0,0%,97.26%,1)",
        "background-tertiary": "hsla(0,0%,92.16%,1)",
        "background-inversePrimary": "hsla(0,0%,7.06%,1)",
        "background-inverseSecondary": "hsla(0,0%,21.18%,1)",
        "background-overlay": "hsla(0,0%,7.06%,0.58)",
        "content-primary": "hsla(0,0%,7.06%,1)",
        "content-quaternary": "hsla(0,0%,44.71%,1)",
        "content-quintary": "hsla(0,0%,54.51%,1)",
        "content-secondary": "hsla(0,0%,21.18%,1)",
        "content-tertiary": "hsla(0,0%,35.3%,1)",
        "content-inversePrimary": "hsla(0,0%,100%,1)",
        "overlay-black": "hsla(0,0%,0%,1)",
        "signal-accent": "hsla(215.28,72.23%,50.59%,1)",
        "signal-breaking": "hsla(352.72,98.1%,41.18%,1)",
        "signal-developing": "hsla(20.19,91.67%,47.06%,1)",
        "signal-editorial": "hsla(205.9,48.72%,38.24%,1)",
        "signal-highlight": "hsla(54.67,95.75%,90.79%,1)",
        "signal-negative": "hsla(354.29,98.83%,33.34%,1)",
        "signal-positive": "hsla(126.98,53.09%,31.77%,1)",
        "stroke-primary": "hsla(0,0%,7.06%,1)",
        "stroke-quaternary": "hsla(0,0%,87.46%,1)",
        "stroke-secondary": "hsla(0,0%,54.51%,1)",
        "stroke-tertiary": "hsla(0,0%,78.04%,1)",
        "stroke-inversePrimary": "hsla(0,0%,100%,1)",
        "static-white": "hsla(0,0%,100%,1)",
        "static-gray100": "hsla(0,0%,0%,1)",
      },
    },
  },
  plugins: [],
};
export default config;
