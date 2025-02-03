import type { Component } from 'solid-js';
import styles from './MenuBar.module.css';
const MenuBar: Component = () => {
    
    return (
        <div class={styles.menuBar}>
            <img src="/src/assets/icons/system/apple.png"/>
        </div>
    );
};

export default MenuBar;