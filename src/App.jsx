import React, { useState } from 'react'
import Buttons from './Components/Buttons'
import Display from './Components/Display'

function App() {
  const [calVal,setCalVal] = useState(0)
  let buttonsText = ["C",1,2,"+",3,4,5,"-",6,7,8,"/","=",9,0,"."];
  const onButtonClick= (buttonsData)=>{
    if (buttonsData === '=') {
      let result = eval(calVal)
      setCalVal(result)
    }
    else if(buttonsData === 'C'){
      setCalVal('')
    }
    else{
      setCalVal(calVal + buttonsData)
    }
  }
  return (
     <div className="calculatorWrapper">
    <div className='calculatorContainer'> 
      <Display displayVal={calVal}/>
      <Buttons buttonsData={buttonsText} onButtonClick={onButtonClick}/>
    </div>
    </div>
  )
}

export default App