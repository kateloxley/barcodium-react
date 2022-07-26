import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BasicLayout from '../../src/styles/global';

export default function Home() {
  return (
    <>
      <BasicLayout>
        <Header />
        <Footer />
      </BasicLayout>
    </>
  );
}
