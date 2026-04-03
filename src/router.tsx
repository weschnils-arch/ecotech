import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

type Route =
  | '/'
  | '/about'
  | '/sales'
  | '/applications'
  | '/applications/agriculture'
  | '/products'
  | '/integration'
  | '/news'
  | '/terms'
  | '/privacy'
  | '/imprint'
  | '/dealers'
  | '/sales/ersatzteile'
  | '/sales/service';

interface RouterContextType {
  path: Route;
  navigate: (path: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<Route>(() => {
    const hash = window.location.hash.slice(1) as Route;
    return hash || '/';
  });

  const navigate = useCallback((newPath: Route) => {
    setPath(newPath);
    window.location.hash = newPath;
    window.scrollTo(0, 0);
  }, []);

  return (
    <RouterContext.Provider value={{ path, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);
  if (context === undefined) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

interface LinkProps {
  to: Route;
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export function Link({ to, children, className = '', style, onClick }: LinkProps) {
  const { navigate, path } = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(to);
    onClick?.();
  };

  const isActive = path === to;
  const activeClass = isActive ? 'nav-active' : '';

  return (
    <a
      href={`#${to}`}
      onClick={handleClick}
      className={`${className} ${activeClass}`}
      style={style}
    >
      {children}
    </a>
  );
}
