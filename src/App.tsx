import { LanguageProvider } from '@/context/LanguageContext';
import { RouterProvider, useRouter } from '@/router';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { SalesPage } from '@/pages/SalesPage';
import { ApplicationsPage } from '@/pages/ApplicationsPage';
import { ProductsPage } from '@/pages/ProductsPage';
import { IntegrationPage } from '@/pages/IntegrationPage';
import { NewsPage } from '@/pages/NewsPage';
import { TermsPage, PrivacyPage, ImprintPage, DealersPage } from '@/pages/LegalPages';

function RouterContent() {
  const { path } = useRouter();

  const renderPage = () => {
    switch (path) {
      case '/':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/sales':
        return <SalesPage />;
      case '/applications':
        return <ApplicationsPage />;
      case '/products':
        return <ProductsPage />;
      case '/integration':
        return <IntegrationPage />;
      case '/news':
        return <NewsPage />;
      case '/terms':
        return <TermsPage />;
      case '/privacy':
        return <PrivacyPage />;
      case '/imprint':
        return <ImprintPage />;
      case '/dealers':
        return <DealersPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <RouterProvider>
        <RouterContent />
      </RouterProvider>
    </LanguageProvider>
  );
}

export default App;
