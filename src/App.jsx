import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import ProjectTable from './components/ProjectTable'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='bg-slate-50 '>
        <Navbar/>
        <div className='max-w-5xl mx-auto mt-5'>
          <Cards />
          <ProjectTable />
        </div>
        <Footer/>
      </div> 
    </>
  )
}

export default App
