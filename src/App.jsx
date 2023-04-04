import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page1 from '../src/pages/Page1'
import Page2 from '../src/pages/Page2'
import Page3 from '../src/pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'

function App() {
  return (
   <main>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
        <Route path='page3' element={<Page3/>}/>
        <Route path='page4' element={<Page4/>}/>
        <Route path='page5' element={<Page5/>}/>
        <Route path='page6' element={<Page6/>}/>
      </Routes>
   </main>
  )
}

export default App