import './App.scss';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Header from './components/Header';
import Mainbar from './components/MainBar';
import Footer from './components/Footer';
import Feedback from './components/Feedback';
import JoinSection from './components/JoinSection';
import Services from './components/ServicesSection';
import Slider from './components/Slider/Slider';

function App() {
  return (
    <div className='container'>
      <Header />
      <Mainbar />
      <Services />
      <JoinSection />
      <Slider />
      <Feedback />
      <Footer />
    </div>
  );
}

export default App;
