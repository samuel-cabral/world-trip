import {
  Box,
  Flex,
  Heading,
  Icon,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Text,
} from '@chakra-ui/react'
import { RiInformationLine } from 'react-icons/ri'

export function Infos() {
  return (
    <Flex align="center" justify="space-between">
      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="600">
          50
        </Heading>
        <Text fontWeight="bold" fontSize={['md', 'xl']} color="gray.700">
          países
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="600">
          60
        </Heading>
        <Text fontWeight="bold" fontSize={['md', 'xl']} color="gray.700">
          línguas
        </Text>
      </Flex>

      <Flex
        direction="column"
        justify="center"
        align={['flex-start', 'flex-start', 'center']}
      >
        <Heading fontSize={['2xl', '5xl']} color="yellow.400" fontWeight="600">
          27
        </Heading>
        <Text fontWeight="bold" fontSize={['md', 'xl']} color="gray.700">
          cidades +100
          <Popover>
            <PopoverTrigger>
              <IconButton
                variant="ghost"
                colorScheme="whiteAlpha"
                border={0}
                color="gray.400"
                w={['0.625rem', '1.5rem']}
                h={['0.625rem', '1.5rem']}
                size={['xs', 'sm']}
                icon={<Icon as={RiInformationLine} fontSize={[16, 20]} />}
                aria-label="Cidades +100"
              />
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton />
              <PopoverBody fontWeight="400" fontSize="lg">
                <Text>Paris, Londres, Roma, Praga, Amsterdã</Text>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Text>
      </Flex>
    </Flex>
  )
}
