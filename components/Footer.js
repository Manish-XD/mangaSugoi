import React from 'react';
import { Box, Flex, Heading, Text, Divider } from '@chakra-ui/react';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box fontFamily="body.1" bg="#f7f6f6" borderTop="1px solid gray" py="1.5rem">
        <Flex justifyContent="space-evenly" mb="1.5rem">
            <Flex flexDirection="column">
                <Heading size="md" mb="1rem">ABOUT</Heading>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Contact Us</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">About Us</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Careers</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Careers</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Manga Sugoi Stories</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Press</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Manga Wholesale</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Corporate Information</Link></Text>
            </Flex>
            <Flex flexDirection="column">
                <Heading size="md" mb="1rem">HELP</Heading>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Payments</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Shipping</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Cancellation & return</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">FAQ</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Report Infringement</Link></Text>
            </Flex>
            <Flex flexDirection="column">
                <Heading size="md" mb="1rem">POLICY</Heading>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Return Policy</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Terms of use</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Security</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Privacy</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Sitemap</Link></Text>
            </Flex>
            <Flex flexDirection="column">
                <Heading size="md" mb="1rem">SOCIAL</Heading>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Facebook</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Twitter</Link></Text>
                <Text _hover={{textDecoration: "underline"}} my="0.25rem"><Link href="/">Youtube</Link></Text>
            </Flex>
            <Flex flexDirection="column" w="15%">
                <Heading size="md" mb="1rem">Mail us:</Heading>
                <Text>Manga Sugoi Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India</Text>
            </Flex>
            <Flex flexDirection="column" w="15%">
                <Heading size="md" mb="1rem">Registered Office Address:</Heading>
                <Text>Manga Sugoi Internet Private Limited, Buildings Alyssa, Begonia & Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli Village, Bengaluru, 560103, Karnataka, India CIN : U51109KA2012PTC066107 Telephone: 044-45614700</Text>
            </Flex>
        </Flex>
        <Divider/>
    </Box>
  )
}

export default Footer