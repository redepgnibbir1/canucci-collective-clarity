import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Lato', 'sans-serif'],
				lato: ['Lato', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				canucci: {
					green: '#9ABA99',
					peach: '#F5D1AF',
					salmon: '#F3837D',
					red: '#EA4960',
					dark: '#27363B',
					light: '#FAFAFC'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'grid-pattern': 'linear-gradient(to right, #27363B 1px, transparent 1px), linear-gradient(to bottom, #27363B 1px, transparent 1px)',
				'wave-pattern': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 67.5C0 67.5 20 82.5 40 82.5C60 82.5 80 67.5 80 67.5V100H0V67.5Z\' fill=\'%2327363B\'/%3E%3C/svg%3E")'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				slideUp: {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideDown: {
					'0%': { transform: 'translateY(-20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				slideInLeft: {
					'0%': { transform: 'translateX(-20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				slideInRight: {
					'0%': { transform: 'translateX(20px)', opacity: '0' },
					'100%': { transform: 'translateX(0)', opacity: '1' }
				},
				pulse: {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'gradient-mesh': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'float-slow': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(10px, 10px)' },
					'50%': { transform: 'translate(0, 20px)' },
					'75%': { transform: 'translate(-10px, 10px)' }
				},
				'float-medium': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(-10px, -10px)' },
					'50%': { transform: 'translate(0, -20px)' },
					'75%': { transform: 'translate(10px, -10px)' }
				},
				'float-fast': {
					'0%, 100%': { transform: 'translate(0, 0)' },
					'25%': { transform: 'translate(15px, -15px)' },
					'50%': { transform: 'translate(0, -30px)' },
					'75%': { transform: 'translate(-15px, -15px)' }
				},
				'grid-flow': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '40px 40px' }
				},
				wave: {
					'0%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-25%)' },
					'100%': { transform: 'translateX(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				fadeIn: 'fadeIn 0.5s ease-out',
				slideUp: 'slideUp 0.5s ease-out',
				slideDown: 'slideDown 0.5s ease-out',
				slideInLeft: 'slideInLeft 0.5s ease-out',
				slideInRight: 'slideInRight 0.5s ease-out',
				pulse: 'pulse 3s infinite',
				'gradient-mesh': 'gradient-mesh 15s ease infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'float-medium': 'float-medium 6s ease-in-out infinite',
				'float-fast': 'float-fast 4s ease-in-out infinite',
				'grid-flow': 'grid-flow 20s linear infinite',
				wave: 'wave 20s linear infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
