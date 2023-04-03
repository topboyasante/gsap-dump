import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page1 from '../src/pages/Page1'
import Page2 from '../src/pages/Page2'
import Page3 from '../src/pages/Page3'
import Page4 from './pages/Page4'

function App() {
  return (
   <main>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
        <Route path='page3' element={<Page3/>}/>
        <Route path='page4' element={<Page4/>}/>
      </Routes>
   </main>
  )
}

export default App