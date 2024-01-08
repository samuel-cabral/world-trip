import { Flex, Grid, Icon, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  const { asPath } = useRouter()
  const isNotInHomePage = asPath !== '/'
  return (
    <Flex
      bg="white"
      w="100%"
      as="header"
      mx="auto"
      px="1rem"
      h={['12', '24']}
      align="center"
      justify="center"
    >
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
      >
        {isNotInHomePage && (
          <Link href="/">
            <Icon
              as={RiArrowLeftSLine}
              fontSize={[20, 40]}
              justifySelf="start"
            />
          </Link>
        )}

        <Image
          w={['20', '44']}
          src="/logo.svg"
          alt="Um avião voando sobre o nome da marca World Trip"
          justifySelf="center"
          gridColumn="2"
        />
      </Grid>
    </Flex>
  )
}
