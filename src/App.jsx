import Giphy from './components/Giphy';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className="container"><Giphy /></div>
    </>
  );
}

export default App;
