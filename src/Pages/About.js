import { Box, HStack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function About() {
    const homebgtoggle = useColorModeValue("home", "homeothermode")
    return (
        <div className={homebgtoggle}>
            <HStack justify="center" p={8}>
                <Box>
                QuoteSite is a website where you can find list of quotes based on different categories.
                </Box>
                </HStack>
        </div>
    )
}

export default About
