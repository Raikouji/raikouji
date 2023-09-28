import type { Config } from 'tailwindcss'

// @ts-ignore
// @ts-ignore
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
      sans: ['var(--font-notoSansJP)'],
      serif: [
        'Times New Roman',
        'YuMincho',
        'Hiragino Mincho ProN',
        'Yu Mincho',
        'MS PMincho',
        'serif',
      ],
    },
    extend: {
      // extend は、デフォルト値を保持しつつ、新しい値を追加
      colors: {
        // Theme 関数の使用：theme('colors.primary')
        transparent: 'transparent',
        current: 'currentColor',
        // primary: {
        //   100: '#e0d8cc', // 使用: bg-primary-100
        //   200: '#c1b199',
        //   light: '#a38a66',
        //   300: '#a38a66',
        //   400: '#846333',
        //   DEFAULT: '#653c00',
        //   500: '#653c00',
        //   600: '#513000',
        //   dark: '#3d2400',
        //   700: '#3d2400',
        //   800: '#281800',
        //   900: '#140c00',
        // },
        // secondary: {
        //   100: '#fce4db', // 使用: bg-secondary-100
        //   200: '#f9c9b8',
        //   light: '#f9c9b8',
        //   300: '#f6ae94',
        //   400: '#f39371',
        //   DEFAULT: '#f0784d',
        //   500: '#f0784d',
        //   600: '#c0603e',
        //   dark: '#f00',
        //   700: '#90482e',
        //   800: '#60301f',
        //   900: '#30180f',
        // },
        // accent: '#187994',
        'accent-dark': '#0f3b47',
        base: '#f0f0ec',
        // cyan: '#79FFE1', // 既存色の上書き設定も可能
        // // ここから chadcn/ui の色設定
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
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
      backgroundImage: {
        dots: "url('https://www.toptal.com/designers/subtlepatterns/uploads/watercolor.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // // chadcn/ui の設定
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      // // chadcn/ui の設定
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
      // // chadcn/ui の設定
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
