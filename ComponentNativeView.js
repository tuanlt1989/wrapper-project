import {requireNativeComponent} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

var ComponentNative = requireNativeComponent('RNViewTest');

class ComponentNativeView extends React.Component {
  render() {
    return <ComponentNative {...this.props} />;
  }
}

ComponentNativeView.propTypes = {
  contentB: PropTypes.string
};

module.exports = ComponentNativeView;