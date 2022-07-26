import React from 'react';
import BasicLayout from '../../src/styles/global';
import Sidebar from '../../components/Sidebar';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer'
import { useState } from 'react';
import Head from 'next/head';


const Terms = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

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
        <Footer />
      </BasicLayout>
    </>
  );
}

export default Terms