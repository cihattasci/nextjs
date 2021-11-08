import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {Provider} from 'react-redux';
import React from 'react';
import {wrapper} from '../redux/reducers/main';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default wrapper.withRedux(MyApp)
