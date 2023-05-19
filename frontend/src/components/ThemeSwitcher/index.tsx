import { MoonIcon, SunIcon } from '@heroicons/react/20/solid';
import { useEffect } from 'react';

type Props = {
  className?: string;
  theme: 'dark' | 'light' | null;
  toggleTheme: (theme: 'dark' | 'light' | null) => void;
};

export const ThemeSwitcher: React.FC<Props> = ({
  className = 'p-2',
  theme,
  toggleTheme,
}: Props) => {
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  return (
    <button className={className} onClick={() => toggleTheme(theme)}>
      {theme === 'dark' ? (
        <MoonIcon className="w-4 fill-neutral-200" />
      ) : (
        <SunIcon className="w-4" />
      )}
    </button>
  );
};
