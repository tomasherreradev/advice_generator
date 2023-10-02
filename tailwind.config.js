{import('tailwindcss').Config}

module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            fontFamily: {
                custom: ['MiFuente', 'sans'],
              },

              colors: {
                cyan: 'hsl(193, 38%, 86%)', 
                neonGreen: 'hsl(150, 100%, 66%)', 
                blue: 'hsl(217, 19%, 38%)', 
                grayishBlue: 'hsl(217, 19%, 24%)',
                darkBlue: 'hsl(218, 23%, 16%)',
              },

              letterSpacing: { 
                '1': '-0.5em',   
              },

              fontSize: {
                'custom-xs': '0.6rem', 
                'custom-sm': '1.25rem', 
                'custom-lg': '2.5rem', 
              },
        },
    },
    plugins: [],
}