import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import OPBanner from '../public/opBanner.jpeg';
import { Box, Text, Heading, Divider, Grid, GridItem, Button, ButtonGroup, Card, CardHeader, CardBody, CardFooter, Stack, Flex } from '@chakra-ui/react';
import doffyLogo from '../public/doffy-logo.png';
import shbf from '../public/shbf.png';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
      </Head>
      <Navbar />
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bandainamcoent.eu%2Fhigh%2Fone-piece%2Fone-piece-unlimited-word-red-dlx%2F00-page-setup%2Fopuwr_banner.jpg&f=1&nofb=1&ipt=fc8729b5a03b3d0f014a17c76ad0a34782374e5ed59c1997593a9cf336328d3f&ipo=images" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bandainamcoent.eu%2Fhigh%2Fone-piece%2Fone-piece-unlimited-word-red-dlx%2F00-page-setup%2Fopuwr_banner.jpg&f=1&nofb=1&ipt=fc8729b5a03b3d0f014a17c76ad0a34782374e5ed59c1997593a9cf336328d3f&ipo=images" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.bandainamcoent.eu%2Fhigh%2Fone-piece%2Fone-piece-unlimited-word-red-dlx%2F00-page-setup%2Fopuwr_banner.jpg&f=1&nofb=1&ipt=fc8729b5a03b3d0f014a17c76ad0a34782374e5ed59c1997593a9cf336328d3f&ipo=images" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Box mx="8rem" my="3rem" fontFamily="body.1">
        <Heading size="lg" fontWeight="500" my="0.5rem">Latest Collections</Heading>
        <Divider />
        <Grid templateColumns='repeat(4, 1fr)' gap={6} my="1.5rem">
          <GridItem>
            <Link href="/">
              <Card maxW='sm' >
                <CardBody>
                  <Image
                    src={shbf}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Superhuman Battlefield</Heading>
                    <Flex justifyContent="space-between" alignItems="flex-end">
                      <Text>Ratings: ⭐⭐⭐⭐ 8</Text>
                      <Heading size="lg">₹389</Heading>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Card maxW='sm' >
                <CardBody>
                  <Image
                    src={shbf}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Superhuman Battlefield</Heading>
                    <Flex justifyContent="space-between" alignItems="flex-end">
                      <Text>Ratings: ⭐⭐⭐⭐ 8</Text>
                      <Heading size="lg">₹389</Heading>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Card maxW='sm' >
                <CardBody>
                  <Image
                    src={shbf}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Superhuman Battlefield</Heading>
                    <Flex justifyContent="space-between" alignItems="flex-end">
                      <Text>Ratings: ⭐⭐⭐⭐ 8</Text>
                      <Heading size="lg">₹389</Heading>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
          <GridItem>
            <Link href="/">
              <Card maxW='sm' >
                <CardBody>
                  <Image
                    src={shbf}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                  />
                  <Stack mt='6' spacing='3'>
                    <Heading size='md'>Superhuman Battlefield</Heading>
                    <Flex justifyContent="space-between" alignItems="flex-end">
                      <Text>Ratings: ⭐⭐⭐⭐ 8</Text>
                      <Heading size="lg">₹389</Heading>
                    </Flex>
                  </Stack>
                </CardBody>
              </Card>
            </Link>
          </GridItem>
        </Grid>
      </Box>
      <Footer/>
    </>
  )
}
