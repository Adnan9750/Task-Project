
import {Link, Paper, Table, TableBody, TableCell, TableContainer, TableHead,TableRow,Typography } from '@mui/material'
import TableData from './TableData'

const ProjectTable = () => {
  return (
    <>
        <div className='p-3'>
        <TableContainer component={Paper} sx={{padding:'15px',backgroundColor:'white'}}>
            <Typography sx={{color:'#6E00EE'}}>
                Recent Orders
            </Typography>
            <Table size='small' sx={{marginBottom:'25px'}}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight:'550'}}>Date</TableCell>
                    <TableCell sx={{fontWeight:'550'}}>Name</TableCell>
                    <TableCell sx={{fontWeight:'550'}}>Ship To</TableCell>
                    <TableCell sx={{fontWeight:'550'}}>Payment Method</TableCell>
                    <TableCell align='right' sx={{fontWeight:'550'}}>Sale Amount</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    TableData.map((row,index)=>(
                      <TableRow key={index}>
                        <TableCell>{row.date}</TableCell>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.shipTo}</TableCell>
                        <TableCell>{row.payment}</TableCell>
                        <TableCell align='right'>{row.amount}</TableCell>
                      </TableRow>
                    ))
                  } 
                </TableBody>
            </Table>
            <Link sx={{color:'#6E00EE'}} href='#'>
              See more orders
            </Link>
          </TableContainer>
        </div> 
    </>
  )
}

export default ProjectTable
