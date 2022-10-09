import React from 'react';
import styles from './App.module.scss';
import Resume from './Components/Resume';
import SidePanel from './Components/SidePanel';

const App = () => {
  return (
    <div className={styles.mainContainer}>
      <SidePanel />
      <Resume />
    </div>
  );
};

export default App;
