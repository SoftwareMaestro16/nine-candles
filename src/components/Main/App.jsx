import { useState } from 'react'
import styles from "./App.module.scss";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FeaturesCards from '../FeaturesCards/FeaturesCards';
import Stats from '../Stats/Stats';

function App() {

  return (
    <>
      <Header />
      
      <div className={styles.bgMain}>
        <div className={styles.mainTextContainer}>
          <h1>Nine Candles</h1>
          <h2>Platform connecting crypto enthusiasts with the latest blockchain news, analytics, and tools.</h2>
        </div>
      </div>

      <div className={styles.featuresContainer}>
        <h2>What We Offer?</h2>
        <FeaturesCards />
      </div>

      <Stats />
      <Footer />
      
    </>
  )
}

export default App;