module.exports = {
  mode: 'jit',
  purge: [
    'template/**/*.html',
    '../mission-control/tutorials/**/*.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        '2xs': '.6rem'
      },
      fontFamily: {
        'sans': '"Open Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        'mono': '"Roboto Mono", ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace'
      },
    	colors: {
    		violet: {
    			50: '#f5f3ff',
    			100: '#ede9fe',
    			200: '#ddd6fe',
    			300: '#c4b5fd',
    			400: '#a78bfa',
    			500: '#8b5cf6',
    			600: '#7c3aed',
    			700: '#6d28d9',
    			800: '#5b21b6',
    			900: '#4c1d95',
    		}
    	},
      transitionDuration: {
        '2500': '2500ms'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
