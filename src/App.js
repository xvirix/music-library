import Home from './components/Home/home';
import Navigation from './components/Navigation/navigation';
import Footer from './components/Header/Header';



function App() {
  return (
    <div>
      <nav>
        <Navigation/>
      </nav>

      <main>
        <Home/>
      </main>
     
      <footer>
        <Footer/>
      </footer>

    </div> 
  );
}

export default App;