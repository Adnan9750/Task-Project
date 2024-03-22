
import { Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
        <div className='relative min-h-[20vh]'>
            <div className='fixed bottom-0 left-0 w-full  py-4 px-2 bg-gray-100 grid place-content-center'>
                <Container>
                    <Typography variant='body1'>
                        My sticky footer can be found here.
                    </Typography>
                    <Typography variant='body2' color="GrayText" fontSize='small'>
                        Copyright @ {' '}
                        <span className='underline'>Your Website </span> {new Date().getFullYear()}
                    </Typography>
                </Container>
            </div>
        </div> 
    </>
  )
}

export default Footer
