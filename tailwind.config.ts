import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '8px',
        md: '16px',
        lg: '32px',
      },
    },
    fontFamily: {
      sans: [
        'Helvetica Neue',
        'Arial',
        'Hiragino Kaku Gothic ProN',
        'Hiragino Sans',
        'Yu Gothic', // Windows
        'Meiryo',
        'ui-serif',
        'sans-serif',
      ],
      serif: [
        'Times New Roman',
        'Hiragino Mincho ProN',
        'Yu Mincho', // Windows
        'MS PMincho',
        'ui-sans-serif',
        'serif',
      ],
    },
    extend: {
      // extend は、デフォルト値を保持しつつ、新しい値を追加
      colors: {
        // Theme 関数の使用：theme('colors.primary')
        transparent: 'transparent',
        current: 'currentColor',
        // // ここから chadcn/ui の色設定
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))', // body の背景色
        foreground: 'hsl(var(--foreground))', // body の背景色
        primary: {
          DEFAULT: 'hsl(var(--primary-600))', // 背景色
          foreground: 'hsl(var(--primary-foreground))', // 背景色
          light: 'hsl(var(--primary-200))',
          dark: 'hsl(var(--primary-700))',
          50: 'hsl(var(--primary-50))',
          100: 'hsl(var(--primary-100))',
          200: 'hsl(var(--primary-200))',
          300: 'hsl(var(--primary-300))',
          400: 'hsl(var(--primary-400))',
          500: 'hsl(var(--primary-500))',
          600: 'hsl(var(--primary-600))',
          700: 'hsl(var(--primary-700))',
          800: 'hsl(var(--primary-800))',
          900: 'hsl(var(--primary-900))',
          950: 'hsl(var(--primary-950))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary-600))',
          foreground: 'hsl(var(--secondary-foreground))',
          light: 'hsl(var(--secondary-200))',
          dark: 'hsl(var(--secondary-800))',
          50: 'hsl(var(--secondary-50))',
          100: 'hsl(var(--secondary-100))',
          200: 'hsl(var(--secondary-200))',
          300: 'hsl(var(--secondary-300))',
          400: 'hsl(var(--secondary-400))',
          500: 'hsl(var(--secondary-500))',
          600: 'hsl(var(--secondary-600))',
          700: 'hsl(var(--secondary-700))',
          800: 'hsl(var(--secondary-800))',
          900: 'hsl(var(--secondary-900))',
          950: 'hsl(var(--secondary-950))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary-500))',
          foreground: 'hsl(var(--tertiary-foreground))',
          light: 'hsl(var(--tertiary-200))',
          dark: 'hsl(var(--tertiary-800))',
          50: 'hsl(var(--tertiary-50))',
          100: 'hsl(var(--tertiary-100))',
          200: 'hsl(var(--tertiary-200))',
          300: 'hsl(var(--tertiary-300))',
          400: 'hsl(var(--tertiary-400))',
          500: 'hsl(var(--tertiary-500))',
          600: 'hsl(var(--tertiary-600))',
          700: 'hsl(var(--tertiary-700))',
          800: 'hsl(var(--tertiary-800))',
          900: 'hsl(var(--tertiary-900))',
          950: 'hsl(var(--tertiary-950))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      warning: 'hsl(var(--warning))',
      'warning-foreground': 'hsl(var(--warning-foreground))',
      danger: 'hsl(var(--danger))',
      'danger-foreground': 'hsl(var(--danger-foreground))',
      backgroundImage: {
        dots: "url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // chadcn/ui の設定
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // chadcn/ui の設定
      keyframes: {
        'accordion-down': {
          // @ts-ignore
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          // @ts-ignore
          to: { height: 0 },
        },
      },
      // chadcn/ui の設定
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    aspectRatio: {
      // @tailwindcss/aspect-ratio Plugin
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
    require('tailwindcss-animate'),
  ],
}
export default config
