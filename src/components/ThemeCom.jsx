'use client';

import { ThemeProvider } from 'next-themes';

const Providers = ({ children }) => {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='system'
    >
      <div className='min-h-screen select-none text-gray-700 transition-colors duration-300 dark:bg-gray-700 dark:text-gray-200'>
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
