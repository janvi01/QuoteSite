import { useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import Categorylist from '../Components/Categorylist'
import Front from '../Components/Front'
import '../style.css'

function Home() {
    const homebgtoggle = useColorModeValue("home", "homeothermode")
    return (
        <div className={homebgtoggle}>
            <VStack justify="center" >
                <Front />
                <Categorylist/>
            </VStack>
        </div>
    )
}

export default Home
