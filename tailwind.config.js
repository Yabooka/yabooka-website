module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      letterSpacing: {
        small: '2px',
        letter: '.4em',
      },
      maxWidth: {
        mywidth: '980px',
      },
      colors: {
        red: '#c20936',
        white: '#f5f5f7',
        black: '#26282c',
        footerCopy: '#86868b',
        footerLink: '#515154',
        footerLinkHover: '#1d1d1f',
        grayBorder: '#d2d2d7',
        fb: '#4267B2',
        telegram: '#0088CC',
        instagram: '#C13584',
      },
      fontFamily: {
        EM: 'EuclidMedium, sans-serif',
        ESB: 'EuclidSemibold, sans-serif',
        EL: 'EuclidLight, sans-serif',
        EB: 'EuclidBold, sans-serif',
      },
      fontSize: {
        mini: '.5rem',
        tiny: '.7rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
