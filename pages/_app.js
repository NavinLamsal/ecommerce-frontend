import Footer from '@/components/Footer'
import Header from '@/components/Header'
import store from '@/store/store';
import '@/styles/globals.css'

import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return(
  <>
  <Provider store={store}>

  <Header/>
  <Component {...pageProps} />
  <Footer/>
  </Provider>
  </>
  );
}
