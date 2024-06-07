import Features from "../components/features/features";
import Header from "../components/header/header";
import Welcome from "../components/welcome/welcome";
import Footer from '../components/footer/footer';
import Contato from '../components/contato/contato';
import Global from "../components/global/global";
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header/>
      <Welcome/>
      <Features/>
      <Global />
      <Contato />
      <Footer />
    </div>
  );
}
