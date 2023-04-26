/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary100':'#2563eb',
        'primary200':'#598EF3',
        'primary300':'#D3E6FE',
        'accent100' :'#d946ef',
        'accent200' :'#fae8ff',
        'text100'   :'#cbd5e1',
        'text200'   :'#94a3b8',
        'bg100'     :'#1e293b',
        'bg200'     :'#334155',
        'bg300'     :'#475569'
      }
    },
  },
  plugins: [],
}

