import { HStack, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { BsMoon, BsSun } from 'react-icons/bs'

function Navbar() {
    const { toggleColorMode } = useColorMode()
    const navtoggle = useColorModeValue("togglehover", "navhover")
    return (
        <div style={{width: "100%" , position: "sticky", top: 0, backgroundColor: useColorModeValue("#ffffff", "#1a202c")}}>
            <HStack justify="space-between" h="10" p={4} pr={[4, 4, 10]} pl={[4, 4, 10]} p={7} borderBottomWidth="thin">
                <Link to="/" className={navtoggle}>QuoteSite</Link>
                <HStack spacing="24px">
                    <Link to="/" className={navtoggle}>Home</Link>
                    <Link to="/about" className={navtoggle}>About</Link>
                    <IconButton icon={useColorModeValue(<BsSun />, <BsMoon />)} colorScheme={useColorModeValue("cyan", "teal")} onClick={toggleColorMode}></IconButton>
                </HStack>
            </HStack>
        </div>
    )
}

export default Navbar
