/*import styles from './Container.module.css'

function Container (props) {
    return (
        <div>
            {props.children}
        </div>
    )
}
export default Container */

import React from 'react';
//import {StyleSheet, View} from  'react-native';
import styles from './Container.module.css'

const Container = (props) => {
  return <div className={`${styles.container} ${styles[props.customClass]}`}>
    {props.children}
    </div>
};

export default Container;