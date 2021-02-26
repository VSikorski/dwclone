import React from 'react';
import Header from './components/Header';
import './App.css';
import Info from './components/Info';
import Footer from './components/Footer';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Info />
            <Header />
          </header>
          <main>
            <Route path= "/" component={HomeScreen} exact></Route>
            <Route path="/product/:id" component={ProductScreen}></Route>
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
  );
}

export default App;
