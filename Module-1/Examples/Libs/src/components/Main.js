require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import Plugin from './plugin';

class AppComponent extends React.Component {
  render() {
    return (
      <Plugin/>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
