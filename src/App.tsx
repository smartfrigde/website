import type { Component } from 'solid-js';

import styles from './App.module.css';
import MenuBar from './components/MenuBar';

const App: Component = () => {
  return (
    <div class={styles.app}>
      <MenuBar />
    </div>
  );
};

export default App;
