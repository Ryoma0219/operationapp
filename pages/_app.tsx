import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { FruitProvider } from '../providers/list/fruit-provider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FruitProvider>
      <Component {...pageProps} />)
    </FruitProvider>
  )
}

export default MyApp
