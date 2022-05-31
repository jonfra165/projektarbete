import Giphy from './components/Giphy';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Giphy />
      </div>
      <Footer />
    </>
  );
}

export default App;
