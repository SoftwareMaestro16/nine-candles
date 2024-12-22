import { useState } from "react";
import styles from "./Header.module.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <div>
        <header>
          <nav className={styles.navStyle}>
            <div className={styles.leftPart}>
              <img className={styles.ncLogo} src="/NineCandles.png" alt="Nine Candles" />
            </div>
            <div className={styles.hamburger} onClick={toggleMenu}>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
              <div className={styles.bar}></div>
            </div>
            <div className={`${styles.rightPart} ${menuOpen ? styles.menuOpen : ''}`}>
                <h1>
                    <a
                    href="https://t.me/NineCandles"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Telegram
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://t.me/NineCandlesStickers"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Stickers
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://t.me/Vetra_Nick"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Ads
                    </a>
                </h1>
                <h1>
                    <a
                    href="https://t.me/Nine_Candles"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    Support
                    </a>
                </h1>
            </div>
          </nav>
        </header>
        {menuOpen && (
          <div className={styles.overlay} onClick={closeMenu}></div> 
        )}  
    </div>
  );
}

export default Header;