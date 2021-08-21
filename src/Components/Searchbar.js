import React /*{ useState }*/ from 'react'
import { InputGroup, InputLeftElement, Input, } from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai'
//import { ListData } from './ListData'

function Searchbar() {
    //const [searchterm, setsearchterm] = useState("");
    return (
        <>
        <InputGroup mt={16} w={["70%", "60%", "50%"]}>
            <InputLeftElement
                pointerEvents="none"
                children={< AiOutlineSearch />}
            />
            <Input boxShadow="dark-lg" placeholder="Search Category" /*onChange={(e) => { setsearchterm(e.target.value) }}*/ />
            {/* {
                ListData.filter((newlist) => {
                    if (searchterm === "")
                        return (<div>No such Category</div>)
                    else if (newlist.main.toLowerCase().includes(searchterm.toLowerCase()))
                        return (newlist.main)
                }).map((newlist, key) => {
                    return
                    (<div key={key}>{newlist}</div>)
                })
            } */}
        </InputGroup>
        </>
    )
}

export default Searchbar
