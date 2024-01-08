import { Flex } from '@chakra-ui/react'

import { Cities } from '@/components/Cities'
import { ContinentBanner } from '@/components/ComponentBanner'
import { Content } from '@/components/Content'
import { Header } from '@/components/Header'

interface ContinentProps {
  continent: {
    slug: string
    name: string
    description: string
    banner: string
  }
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <Flex direction="column">
      <Header />
      <ContinentBanner />

      <Flex direction="column" maxW="1160px" mx="auto" mb="10" px="1rem">
        <Content />
        <Cities />
      </Flex>
    </Flex>
  )
}
