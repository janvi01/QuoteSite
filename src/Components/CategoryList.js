import { Box, Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'
import { ListData } from './ListData'
import { Link } from 'react-router-dom'

function CategoryList() {
    return (
        <div>
            <Heading as="h1" textAlign="center">Categories</Heading>
            <Flex direction={["column", "row"]} spacing="96px" justify="center" wrap="wrap" w="100%" >
                {ListData.map((item, key) => {
                    return <Box boxSize="200px" m={16} key={key} bgImage={item.imageurl} shadow="dark-lg" textAlign="center">
                        <Link to={`/singlequote/${item.category}`}><Button mt="70%" variant="solid" size="md" colorScheme="gray" fontWeight="bold" letterSpacing="wider">{item.main}</Button></Link></Box>
                })}
            </Flex>
        </div>
    )
}

export default CategoryList
