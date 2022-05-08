module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateY(5px)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        slide:{
          '0%':{ transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)'},
        }
      },
      animation: {
        'move': 'move 5s infinite',
        'spin-slow' : 'spin 7s 1 ease-in-out',
        'slide':"slide 0.5s ease-out"
      },
      width:{
        150:"150px",
        170:"170px",
        190:"190px",
        225:"225px",
        275:"275px",
        300:"300px",
        340:"340px",
        350:"350px",
        375:"375px",
        460:"460px",
        656:"656px",
        880:"880px",
        508:"508px"
      },
      height:{
        80:"80px",
        150:"150px",
        225:"225px",
        300:"300px",
        340:"340px",
        370:"370px",
        420:"420px",
        510:"510px",
        600:"600px",
        685:"685px",
        800:"800px",
        "90vh":"90vh"
      },
      minWidth:{
        210:"210px",
        350:"350px",
        620:"620px"
      },
      screens:{
        sm:"640px",
        md:"768px",
        lg:"1024px",
        xl:"1280px",
        "2xl":"1536px"
      },
      colors:{
        headingColor:"#2e2e2e",
        textColor:"#515151",
        cartNumBg:"#F14929",
        primary:"#f5f3f3",
        main:"#F14929",
        cardOverlay: "rgba(256,256,256,0.4)"
      },

    },
  },
  plugins: [],
}
