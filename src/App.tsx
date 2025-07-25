import './App.css';
import React from 'react';
import { Route, Routes } from "react-router-dom";
import About from './routes/About';
import Home from './routes/Home';
import Layout from './routes/Layout';
import Review from './routes/Review';

class App extends React.Component {
  render() {
      return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />}/>
            <Route path="/review" element={<Review />}/>
          </Route>
        </Routes>
    );
  }
}

export default App;
