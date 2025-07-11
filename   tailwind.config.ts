/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["swiper-pagination-bullet", "swiper-pagination-bullet-active"],
  theme: {
    extend: {
      borderColor: {
        border: "var(--border)",
      },
      colors: {
        border: "var(--border)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        tertiary: "#E73CE7",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-2px)" },
          "40%": { transform: "translateX(2px)" },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)" },
        },
        bounceSlow: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        floatLeft: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatRight: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".5" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        bounceX: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(15px)" },
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-25%)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },

        rotateBounce: {
          "0%, 100%": {
            transform: "rotate(0deg) translateY(0)",
          },
          "25%": {
            transform: "rotate(90deg) translateY(10px)",
          },
          "50%": {
            transform: "rotate(180deg) translateY(0)",
          },
          "75%": {
            transform: "rotate(270deg) translateY(-10px)",
          },
        },

        slowspin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        floatLeft: "floatLeft 6s ease-in-out infinite",
        floatRight: "floatRight 8s ease-in-out infinite",
        pulseSlow: "pulseSlow 2s ease-in-out infinite",
        wiggle: "wiggle 1s ease-in-out infinite",
        bounceX: "bounceX 2s ease-in-out infinite",
        spinSlow: "spinSlow 8s linear infinite",
        "bounce-slow": "bounceSlow 6s ease-in-out infinite",

        rotate: "rotate 10s linear infinite",
        "rotate-bounce": "rotateBounce 2s ease-in-out infinite",
        bounce: "bounce 5s ease-in-out infinite",
        // "rotate-bounce":
        //   "rotate 10s linear infinite, bounce 5s ease-in-out infinite",

        slowspin: "spin 10s linear infinite", // 10s for slow rotation

        shake: "shake 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
