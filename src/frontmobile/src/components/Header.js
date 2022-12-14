import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';


const Header = ({title, subtitle, goBack, children}) => {

  return (
        <>
      <Appbar.Header style={styles.headerStyle}>
        {
          goBack &&
          <Appbar.BackAction color="white"  onPress={goBack} /> 
        }
        <Appbar.Content title={title} titleStyle={{ alignSelf: 'center', color: '#ffbb33' }} subtitle={subtitle} subtitleStyle={{ alignSelf: 'center' }} style={styles.contentStyle} />{children}
      </Appbar.Header>
        </>
    );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#222',
    position: 'center',
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentStyle:{
    textAlign: 'right',
  }
})


export default Header;