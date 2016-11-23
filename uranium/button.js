import React from 'react';
import { render } from 'react-dom';
import { View, TouchableOpacity } from 'react-native-web'
import Uranium from 'uranium';

const styles = {
  container: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#ff0000',
    width: 320,
    padding: 20,
    borderRadius: 5,
    border: 'none',
    outline: 'none',
    ':hover': {
      color: '#fff',
    },
    ':active': {
      position: 'relative',
      top: 2
    },
    '@media (max-width: 480px)': {
      width: 160
    }
  }
};

const Button = Uranium(() => (
  <View css={styles.container}>
    <TouchableOpacity css={styles.button}>
      Click me!
    </TouchableOpacity>
  </View>
));

render(<Button />, document.getElementById('content'));
