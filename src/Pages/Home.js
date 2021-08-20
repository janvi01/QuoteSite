import { useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import CategoryList from '../Components/CategoryList'
import Front from '../Components/Front'
import Searchbar from '../Components/Searchbar'
import '../style.css'

function Home() {
    const homebgtoggle = useColorModeValue("home", "homeothermode")
    return (
        <div className={homebgtoggle}>
            <VStack spacing="96px" justify="center" >
                <Searchbar />
                <Front/>
                <CategoryList />
            </VStack>
        </div>
    )
}

export default Home
