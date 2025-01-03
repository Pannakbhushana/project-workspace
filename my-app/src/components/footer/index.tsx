'use client'

import {
  Box,
  chakra,
  Container,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box
      className='bg-meta-blue'
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}>
          <Stack spacing={6}>
            <div className='text-start'>
              <Box><img src="./hornokplease.png" alt="" onClick={() => navigate('/')} className='cursor-pointer' /></Box>
              <br />
              <Text fontSize={'sm'} className='text-white'>© 2024 Transport. All rights reserved</Text>
            </div>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'} >
                <span className='hover:text-meta-orange text-white'><FaTwitter /></span>
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <span className='hover:text-meta-orange text-white'><FaYoutube /></span>
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <span className='hover:text-meta-orange text-white'><FaInstagram /></span>
              </SocialButton>
            </Stack>
          </Stack>
          <Stack align={'flex-start'}>
            <Box className='text-white cursor-pointer' onClick={() => navigate('/')}>Home</Box>
            <Box className='text-white cursor-pointer' onClick={() => navigate('/about-us')}>About us</Box>
            <Box className='text-white cursor-pointer' onClick={() => navigate('/services')}>Service</Box>
            <Box className='text-white cursor-pointer' onClick={() => navigate('/why-us')}>Why Us</Box>
            <Box className='text-white cursor-pointer' onClick={() => navigate('/contact')}>Contact us</Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader ><span className='text-white'>Support</span></ListHeader>
            <Box className='text-white'>Help Center</Box>
            <Box className='text-white'>Terms of Service</Box>
            <Box className='text-white'>Legal</Box>
            <Box className='text-white'>Privacy Policy</Box>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader><span className='text-white'>Stay up to date</span></ListHeader>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'whiteAlpha.300',
                }}
              />
              <IconButton
                bg={'#F26736'}
                color={useColorModeValue('white', 'gray.800')}
                _hover={{
                  bg: '#F26740',
                }}
                aria-label="Subscribe"
                icon={<BiMailSend />}
              />
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  )
}