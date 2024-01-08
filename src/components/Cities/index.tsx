import { Grid, Heading } from '@chakra-ui/react'
import { City } from './City'

export function Cities() {
  return (
    <>
      <Heading
        fontWeight="500"
        fontSize={['2xl', '4xl']}
        mb="10"
        mt="10"
        ml="1rem"
      >
        Cidades +100
      </Heading>

      <Grid
        templateColumns={[
          'repeat(1, 1fr)',
          'repeat(2, 1fr)',
          'repeat(3, 1fr)',
          'repeat(4, 1fr)',
        ]}
        gap={['20px', '45px']}
        alignItems="center"
        justifyContent="center"
        px={['30px', '0']}
      >
        <City />
        <City />
        <City />
        <City />
        <City />
      </Grid>
    </>
  )
}
