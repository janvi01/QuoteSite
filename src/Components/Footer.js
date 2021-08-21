import { Box, VStack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import {ReactComponent as Endsvg1} from '../Assets/endsvg1.svg'
import {ReactComponent as Endsvg2} from '../Assets/endsvg2.svg'

function Footer() {
    const homebgtoggle = useColorModeValue("home", "homeothermode")
    return (
        <div className={homebgtoggle}>
            <VStack w="100%" pb={8}>
            <Box w="50%">
        {useColorModeValue(<Endsvg2 width="100%"/>, <Endsvg1 width="100%"/>)}</Box>
                <Box>2021 © - Made with Love ❤️</Box>
            </VStack>
        </div>
    )
}

export default Footer
