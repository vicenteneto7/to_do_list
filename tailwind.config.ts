import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      
      boxShadow: {
        '3xl': '3px 3px 8px 0px rgba(46, 53, 62, 0.90) inset, -3px -3px 6px 0px rgba(66, 75, 88, 0.90) inset, 3px -3px 6px 0px rgba(46, 53, 62, 0.20) inset, -3px 3px 6px 0px rgba(46, 53, 62, 0.20) inset, -1px -1px 2px 0px rgba(46, 53, 62, 0.50), 1px 1px 2px 0px rgba(66, 75, 88, 0.30)', 
        '4xl': '-1px -1px 2px 0px rgba(48, 54, 64, 0.50) inset, 1px 1px 2px 0px rgba(64, 74, 86, 0.30) inset'     
      },
      dropShadow: {
        'filter': ['drop-shadow(5px 5px 13px rgba(48, 54, 64, 0.90)) drop-shadow(-5px -5px 10px rgba(64, 74, 86, 0.90)) drop-shadow(5px -5px 10px rgba(48, 54, 64, 0.20)) drop-shadow(-5px 5px 10px rgba(48, 54, 64, 0.20))']
      },
      maxWidth: {
        '3.8': '90%'
      }
    },
  },
  plugins: [],
}
export default config
