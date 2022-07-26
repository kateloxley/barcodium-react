import Head from 'next/head';

import BasicLayout from '../src/styles/global';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import BannerSection from '../components/BannerSection';
import ReasonsSection from '../components/ReasonsSection';
import StepsSection from '../components/StepsSection';
import PricesSection from '../components/PricesSection';
import FeaturesSection from '../components/FeaturesSection';
import WidgetSection from '../components/WidgetSection';
import FaqSection from '../components/FaqSection';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';

import { useRouter } from 'next/router';
import { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { buySection, callbackSection } from '../components/InfoSection/Data';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Head>
        <title>Barcodium</title>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <BasicLayout>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <BannerSection />
        <ReasonsSection />
        <StepsSection />
        <PricesSection />
        <FeaturesSection />
        <WidgetSection />
        <InfoSection {...callbackSection} />
        <FaqSection />
        <InfoSection {...buySection} />

        <BlogSection />
        <Footer />
      </BasicLayout>
    </>
  );
}
