import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Page1 from '../pages/Page1'
import Page2 from '../pages/Page2'
import Page3 from '../pages/Page3'

function App() {
  return (
   <main>
      <Routes>
        <Route path='/' element={<Page1/>}/>
        <Route path='page2' element={<Page2/>}/>
        <Route path='page3' element={<Page3/>}/>
      </Routes>
   </main>
  )
}

export default App