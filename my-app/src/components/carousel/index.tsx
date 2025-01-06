'use client'

import React from 'react'
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react'
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
import Slider from 'react-slick'

const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
}

export default function CaptionCarousel() {
    const [slider, setSlider] = React.useState<Slider | null>(null)

    const top = useBreakpointValue({ base: '90%', md: '50%' })
    const side = useBreakpointValue({ base: '30%', md: '40px' })

    const cards = [
        {
            title: 'Full Service Moving Company',
            text: "Welcome to Horn Ok Please",
            image: 'https://img.freepik.com/premium-photo/trucks-parked-lined-road-freight-industry-logistics-transport_917664-25776.jpg',
        },
        {
            title: 'Best Moving Company In The UAE!',
            text: "Welcome to Horn Ok Please",
            image:'https://img.freepik.com/premium-photo/white-truck-highway-forest-landscape-business-transportation_1168123-9060.jpg',
        },
        {
            title: 'Fast & Secure Moving Company',
            text: "Welcome to Horn Ok Please",
            image:'./transport.jpg',
        },
    ]

    return (
        <Box position={'relative'} height={'100vh'} width={'full'} overflow={'hidden'}>
   
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            />
            <link
                rel="stylesheet"
                type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            />

            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>

            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>

            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => (
                    <Box
                        key={index}
                        height={'95vh'}
                        backgroundPosition="center"
                        backgroundRepeat="no-repeat"
                        backgroundSize="cover"
                        objectFit="cover"
                        backgroundImage={`url(${card.image})`}>
                      
                        <Container size="container.lg" height="600px" position="relative" textAlign={'left'}>
                            <Stack
                                spacing={6}
                                w={'full'}
                                maxW={'lg'}
                                position="absolute"
                                top="70%"
                                left={ {base: '0%', xl: '-80%'} }
                                transform="translate(0, -50%)">
                                <Text fontSize={{ base: 'md', lg: 'lg' }} color="white">
                                    {card.text}
                                </Text>
                                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} color="white">
                                    {card.title}
                                </Heading>
                                <button className='bg-meta-orange rounded-lg py-3 px-4 hover:bg-opacity-50 w-[40%] md:w-[25%]'>Learn More</button>
                            </Stack>
                        </Container>
                    </Box>
                ))}
            </Slider>
        </Box>
    )
}