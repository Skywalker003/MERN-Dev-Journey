import './App.css';
import Footer from './components/Footer';
import Intro1 from './components/Intro1';
import Intro2 from './components/Intro2';
import Intro3 from './components/Intro3';
import Nav from './components/Nav';
import Promo from './components/Promo';

function App() {
  return (
    <div className="App">
      <Nav />
      <main className="page-content">
        <Promo />
        <section className="content-stack">
          <h1>My React Learning Journey</h1>
          <Intro1 />
          <Intro2 />
          <Intro3 />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
