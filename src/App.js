import React from 'react'
import Frogger from './Frogger'
import { RecoilRoot } from 'recoil'

const App = () => {
  return (
    <RecoilRoot>
      <div className="App">
        <h1>FROGGER</h1>
        <Frogger />
      </div>
    </RecoilRoot>
  )
}

export default App