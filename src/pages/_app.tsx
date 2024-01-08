import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

import '@/styles/slider.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
