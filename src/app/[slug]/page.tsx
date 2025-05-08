'use client';

import { useParams } from 'next/navigation';
import HomePage from '../components/view/HomePage';
import AboutPage from '../components/view/AboutPage';
import Pristina from '../components/view/Pristina';
import AboutEvent from '../components/view/AboutEvent';
import SponsorsPage from '../components/view/SponsorsPage';
import Blog from '../blog/page';




export default function DynamicPage() {
  const { slug } = useParams();

  const pageComponents: Record<string, React.ReactNode> = {
    'home': <HomePage />,
    'about-fesk': <AboutPage />,
    'about-event': <AboutEvent />,
    'blog': <Blog />,
    'what-to-visit-in-Pristina': <Pristina  />,
    'sponsors': <SponsorsPage />,
  };

  const PageComponent = pageComponents[slug as string];

  if (!PageComponent) {
    return (
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold font-britanica-regular">404 - Page Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      {PageComponent}
    </div>
  );
}
