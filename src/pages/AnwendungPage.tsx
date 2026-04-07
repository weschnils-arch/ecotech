import { useEffect } from 'react';
import { useRouter } from '@/router';
import { AnwendungLayout } from '@/components/AnwendungLayout';
import { getApplicationBySlug } from '@/data/applications';

interface AnwendungPageProps {
  slug: string;
}

export function AnwendungPage({ slug }: AnwendungPageProps) {
  const { navigate } = useRouter();
  const app = getApplicationBySlug(slug);

  useEffect(() => {
    if (!app) {
      navigate('/applications');
    }
  }, [app, navigate]);

  if (!app) return null;

  return <AnwendungLayout app={app} />;
}
