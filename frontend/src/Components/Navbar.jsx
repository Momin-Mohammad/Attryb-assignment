import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){
    const navigate = useNavigate();
    return(
        <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Link to="/"><Heading size='md'>Home</Heading></Link>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button onClick={()=>navigate("/signup")} colorScheme='teal'>Sign Up</Button>
    <Button onClick={()=>navigate("/login")} colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex>
    )
}