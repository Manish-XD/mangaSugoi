import React from 'react';
import { Flex, Text, Button, Tooltip } from '@chakra-ui/react';
import { Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton } from '@chakra-ui/react'
import logo from '../public/doffy-logo.png';
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure } from '@chakra-ui/react';


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  return (
    <>
    <Flex bg="#f7f6f6" fontFamily="body.1" mx="0.5rem" my="0.5rem" px="2rem" py="1rem" border="0.5px solid gray" justifyContent="space-between">
      <Flex>
        <Link href="/">
          <Tooltip label='Home' fontFamily="body.1">
          <Flex alignItems="center">
            <Image src={logo} height={50}/>
            <Text fontWeight="500" ml="1rem">Manga Sugoi</Text>
          </Flex>
          </Tooltip>
        </Link>
        <Flex alignItems="center" justifyContent="space-between" w="15rem" fontWeight="500" ml="3rem">
        <Tooltip label='Shop all manga' fontFamily="body.1"><Text _hover={{textDecoration: "underline"}}><Link href="/">Shop</Link></Text></Tooltip>
          <Tooltip label='Trending 🔥 manga' fontFamily="body.1"><Text _hover={{textDecoration: "underline"}}><Link href="/">Trending</Link></Text></Tooltip>
          <Tooltip label='Latest 📅 manga' fontFamily="body.1"><Text _hover={{textDecoration: "underline"}}><Link href="/">Latest</Link></Text></Tooltip>
        </Flex>
      </Flex>
      <Flex alignItems="center" w="20%" justifyContent="space-between" fontWeight="500">
        <Tooltip label='Search any manga' fontFamily="body.1"><Text _hover={{cursor: "pointer"}}>Search</Text></Tooltip>
        <Tooltip label='Login/signup' fontFamily="body.1"><Text _hover={{cursor: "pointer"}}>My Account</Text></Tooltip>
      <Button ref={btnRef} bg="black" onClick={onOpen} color="white">
        Cart
      </Button>
      </Flex>
    </Flex>
    <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent fontFamily="body.1">
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Text>HEhe</Text>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default Navbar