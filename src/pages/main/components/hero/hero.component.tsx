import React, { useRef } from 'react';
import ButtonComponent from '../../../../common/components/button/button.component';
import styles from './hero.module.css';
import image from './images/ipad-hand.png';

const HeroComponent: React.FC = () => {

  const menuElementRef = useRef<HTMLDivElement>(null);

  function menuToggleHandler(e: React.MouseEvent<HTMLInputElement>): void {
    const bodyEl = document.querySelector("body");
    bodyEl!.style.overflow = (bodyEl!.style.overflow == 'hidden') ? 'visible' : 'hidden';
    const menuEl = menuElementRef.current;
    menuEl!.classList.toggle(styles.active);
  }

  return (
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <div className={styles.content}>
          <h3>Grammar Rush</h3>
          <h2>The best application for learning grammar</h2>
          <h1>Mobile and Web Application</h1>
          <ButtonComponent name='Download' />
        </div>
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <div className={styles.rightColumn}>
        <img src={image} alt="" />
        <div className={styles.circleButton}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <i onClick={menuToggleHandler} className={`fas fa-bars ${styles.menuBtn}`}></i>
      </div>
      <div ref={menuElementRef} className={styles.menu}>
        <h1>Sign In</h1>
        <h1 onClick={menuToggleHandler}>Exit</h1>
      </div>
    </div>
  )
}

export default HeroComponent;