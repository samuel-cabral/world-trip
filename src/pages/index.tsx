import { Banner } from '@/components/Banner'
import { Categories } from '@/components/Categories'
import { Header } from '@/components/Header'
import { Separator } from '@/components/Separator'
import { Slider } from '@/components/Slider'

import { Flex, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex direction="column">
      <Header />
      <Banner />
      <Categories />
      <Separator />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>

      <Slider />
    </Flex>
  )
}
