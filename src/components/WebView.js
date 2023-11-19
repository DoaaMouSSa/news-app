//import { WebView } from 'react-native-webview';
import {View } from 'react-native';

import React, { Component } from 'react';

class WebViewComponent extends Component {
    render() { 
        return (
            <View source={{ uri: `${this.props.route.params.url}` }} ></View>
        );
    }
}
 
export default WebViewComponent;