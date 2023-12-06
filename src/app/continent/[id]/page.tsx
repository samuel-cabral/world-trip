'use client'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'

interface ContinentProps {
  params: {
    id: string
  }
}

export default function Continent({ params }: ContinentProps) {
  return (
    <Box>
      {/* Continent banner section */}
      <Flex w="100%" h={500} align="center" justify="center" pos="relative">
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          bgImage={`url('/background.png')`}
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          filter={'brightness(0.5)'}
        />
        <Text
          fontWeight="700"
          fontSize={['1.5rem', '2.75rem', '3rem']}
          lineHeight={['2.25rem', '2.625rem', '3rem']}
          textAlign="center"
          color="gray.50"
          mb="3"
        >
          Europa
        </Text>
      </Flex>

      {/* Continent info section */}
      <Flex
        w="100%"
        maxW={1480}
        mx="auto"
        px="6"
        align="center"
        justify="center"
      >
        <Stack
          spacing="6"
          direction={['column', 'column', 'row']}
          mt="20"
          mb="20"
        >
          <Text
            w="100%"
            maxW="600px"
            fontSize={['0.875rem', '1.125rem', '1.5rem']}
            textAlign="justify"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero.
          </Text>
          <Stack
            spacing="6"
            direction={['column', 'column', 'row']}
            w="100%"
            maxW="600px"
          >
            <Stack spacing="2" direction="row" align="center" justify="center">
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                50
              </Text>
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                países
              </Text>
            </Stack>
            <Stack spacing="2" direction="row" align="center" justify="center">
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                60
              </Text>
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                línguas
              </Text>
            </Stack>
            <Stack spacing="2" direction="row" align="center" justify="center">
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                27
              </Text>
              <Text
                fontWeight="600"
                fontSize={['1.5rem', '2.25rem', '3rem']}
                color="yellow.500"
              >
                cidades +100
              </Text>
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  )
}
