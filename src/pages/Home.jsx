import { useState, useEffect } from 'react';
import Aprende from '@/components/home/Aprende'
import CounterSection from '@/components/home/CounterSection'
import Descobre from '@/components/home/Descobre'
import Hero from '@/components/home/Hero'
import Juntate from '@/components/home/Juntate'
import Ligate from '@/components/home/Ligate'
import WeekEvents from '@/components/WeekEvents'
import { Helmet } from 'react-helmet';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Home | Conservatório Artallis </title>
        <meta name="description" content="Conservatório Artallis | Aprende" />
      </Helmet>
      <Hero />
      <div className='relative'>
        <Descobre />
        <Aprende />
        <CounterSection />
        <Ligate />
        <Juntate />

        <div
          className={`fixed bottom-72 lg:bottom-52 right-2 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <WeekEvents />
        </div>
      </div>
    </>
  );
}

export default Home;