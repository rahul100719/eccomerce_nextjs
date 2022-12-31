import { Toaster } from 'react-hot-toast'
import Layout from '../componets/Layout'
import { StateContext } from '../context/stateContext'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
  <Layout> 
    <Toaster/> 
    <Component {...pageProps} />
  </Layout>
  </StateContext>
)
}
