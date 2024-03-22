
import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'

const Cards = () => {
  return (
    <>
      <div className='p-3'>
          <Grid container spacing={2} mb={1} sx={{flexWrap: 'wrap'}}>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{height:'215px'}}>
                <CardContent>
                  <Typography sx={{color:'#6E00EE',fontWeight:500}} >
                    Recent Deposits
                  </Typography>
                  <Typography variant='h5' sx={{marginTop:'2px'}}>
                    $3024.00
                  </Typography>
                  <Typography sx={{fontSize:'13px'}} mb={7} className='text-gray-500'>
                    on 15 March, 2019
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{textDecoration:'underline',fontSize:'13px',color:'#6E00EE',textTransform:'none'}}>
                        View balance
                    </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{height:'215px'}}>
                <CardContent>
                  <Typography sx={{color:'#6E00EE',fontWeight:500}} >
                    Total Orders
                  </Typography>
                  <Typography variant='h5' sx={{marginTop:'2px'}}>
                    324
                  </Typography>
                  <Typography sx={{fontSize:'13px'}} mb={7} className='text-gray-500'>
                    on 16 March, 2019
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button sx={{textDecoration:'underline',fontSize:'13px',color:'#6E00EE',textTransform:'none'}}>
                        View inventory
                    </Button>
                  </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{height:'215px'}}>
                <CardContent>
                  <Typography sx={{color:'#6E00EE',fontWeight:500}} >
                    Order Shipped
                  </Typography>
                  <Typography variant='h5' sx={{marginTop:'2px'}}>
                    200
                  </Typography>
                  <Typography sx={{fontSize:'13px'}} mb={7} className='text-gray-500'>
                    on 15 March, 2019
                  </Typography>
                </CardContent>
              </Card>
            </Grid>           
          </Grid>
        </div>
    </>
  )
}

export default Cards
