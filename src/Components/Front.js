import React from 'react'
import { Stack, Box, Heading, useColorModeValue } from '@chakra-ui/react'
import { ReactComponent as Readdarksvg } from '../Assets/reading.svg'
import { ReactComponent as Readlightsvg } from '../Assets/readinglight.svg'

function Front() {
    return (
        <Stack direction={["column", "row"]} p={[8, 12, 16]}>
            <Heading as="h2" mt={16}>
                "The biggest adventure you can take is to live the life of your dreams" ✨
                <br /><br /> <i>~Oprah Winfrey</i>
            </Heading>
            <Box>
                {useColorModeValue(<Readlightsvg width="100%" />, <Readdarksvg width="100%" />)}
            </Box>
        </Stack>
    )
}

export default Front