import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react';

// Static routes that the router knows about. Application subpages use the
// dynamic /applications/:slug pattern handled in App.tsx — they're allowed
// values too but typed as `string` rather than enumerated here.
export type StaticRoute =
  | '/'
  | '/about'
  | '/sales'
  | '/applications'
  | '/products'
  | '/integration'
  | '/news'
  | '/terms'
  | '/privacy'
  | '/imprint'
  | '/dealers'
  | '/sales/ersatzteile'
  | '/sales/service';

// Any string that begins with /applications/ or /news/ qualifies as a dynamic subpage.
export type Route = StaticRoute | `/applications/${string}` | `/news/${string}`;

interface RouterContextType {
  path: Route;
  navigate: (path: Route) => void;
}

const RouterContext = createContext<RouterContextType | undefined>(undefined);

function readHash(): Route {
  const hash = window.location.hash.slice(1);
  return (hash || '/') as Route;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [path, setPath] = useState<Route>(() => readHash());

  // Sync state with browser back/forward navigation.
  useEffect(() => {
    const handleHashChange = () => setPath(readHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

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
