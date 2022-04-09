import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  safelist: 'p-1 p-2 p-3 p-4 bg-main bg-sucess bg-fail bg-warn',
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      main: '#00BAD7',
      sucess: '#05CE6D',
      fail: '#FF4747',
      warn: '#FFB435',
    }),
    textColor: {
      maim: '#00BAD7', // main-text 文字颜色
      title: '#333333',
      'status-fail': '#FF4747',
    },
    borderColor: (theme) => ({
      ...theme('colors'),
      maim: '#00BAD7',
    }),
    boxShadow: {
      sm: '0 1px 6px 0 rgba(0, 0, 0, 0.05), 0 1px 3px 0 rgba(237, 239, 241, 1)',
      DEFAULT: '0 3px 9px 0 rgba(237, 239, 241, 1), 0 3px 9px 0 rgba(237, 239, 241, 1)', // If a DEFAULT shadow is provided, it will be used for the non-suffixed shadow utility.
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 8px 15px 5px rgba(0, 0, 0, 0.1), 0 4px 6px 0px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    },
  },
  shortcuts: {
    // 复用样式
    btn: 'bg-main',
    btnActive: 'text-white bg-green-500 hover:bg-green-700',
    // 可用于快速确定目标元素的边界
    debugbox1: 'border-1 border-green-300 bg-green-100',
    debugbox2: 'border-1 border-blue-600',
    debugbox3: 'border-1 border-red-300',
  },
});
