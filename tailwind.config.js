/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		borderRadius: {
			xl: '50px',
  			lg: '35px',
  			md: '20px',
  			sm: '12px'
  		},
		  colors: {
			artYellow: {
			  50: "#fccd00",
			},
			artRed: {
			  50: "#e20613",
			},
			artMagenta: {
			  50: "#d766a2",
			},
			artLightBlue: {
			  50: "#79ccf3",
			},
			artMidBlue: {
			  50: "#009ee2",
			},
			artDarkBlue: {
			  50: "#198ece",
			},
			artLime: {
			  50: "#bbce00",
			},
			artOrange: {
			  50: "#f2921a",
			},
		},
		  maxWidth: {
			container: '1280px'
		},
		fontFamily: {
			'montserrat': ['Roboto', 'sans-serif'],
			'barlow': ['Barlow', 'sans-serif'],
			'lato': ['Lato', 'sans-serif'],
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

