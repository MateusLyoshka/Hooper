import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		animation: {
			'motion-blur': 'motion-blur 4s ease-in-out forwards',
			'fade-up': 'fadeup 1s ease-in-out',
			'fade-logo': 'fadeon 3s ease-in-out'
		  },keyframes: {
			'fadeon':{
				'0%': { opacity: '0' },
				'50%': { opacity: '0' },
				'100%': { opacity:'1' }
			},
			'fadeup': {
			  '0%': { opacity: '0', transform: 'translateY(40px)' },
			  '20%': { opacity: '1'},
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
			'motion-blur': {
			  '0%': { transform: 'translateX(0) scaleX(0.85)', boxShadow: '0 0 0 rgba(255, 255, 255, 0.1)' },
			  '5%': { transform: 'translateX(0) scaleX(0.85)' },
			  '25%': { transform: 'translateX(0) scaleX(1.05) skew(-3deg)', boxShadow: '-20px 0 15px rgba(255, 255, 255, 0.4)' },
			  '50%': { transform: 'translateX(300px) scaleX(1) skew(0deg)', boxShadow: '0 0 0 rgba(255, 255, 255, 0)' },
			  '55%': { transform: 'translateX(300px) scaleX(0.9)' },
			  '75%': { transform: 'translateX(0) scaleX(1.05) skew(3deg)', boxShadow: '20px 0 15px rgba(255, 255, 255, 0.4)' },
			  '100%': { transform: 'translateX(0) scaleX(1) skew(0deg)', boxShadow: '0 0 0 rgba(255, 255, 255, 0)' },
			},
		  },	
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
