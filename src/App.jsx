import { useState } from 'react';
import './App.css'

function App() {
  const [currentFormColor, setCurrentFormColor] = useState('#52206b')
  const [currentBgColor, setCurrentBgColor] = useState('#7b4397')
  const changeColor = (bgColor, formColor) => {
    setCurrentBgColor(bgColor)
    setCurrentFormColor(formColor)
  }
  return (
    <div className='App'>
      <div className='container' style={{ backgroundColor: `${currentBgColor}` }}>
        <div className='color-container'>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#7b4397' }}
            onClick={() => { changeColor('#7b4397', '#52206b') }}>
          </button>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#39807b' }}
            onClick={() => { changeColor('#39807b', '#205452') }}>
          </button>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#43697b' }}
            onClick={() => { changeColor('#43697b', '#204052') }}>
          </button>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#7b7a43' }}
            onClick={() => { changeColor('#7b7a43', '#525020') }}>
          </button>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#7b4343' }}
            onClick={() => { changeColor('#7b4343', '#522020') }}>
          </button>
          <button style={{ borderRadius: '50%', width: '50px', height: '50px', backgroundColor: '#f7f5dc' }}
            onClick={() => { changeColor('#f7f5dc', '#cfc8a8') }}>
          </button>
        </div>
        <div className='form-area' style={{ boxShadow: `30px 35px 2px ${currentFormColor}` }}>
          <button>Long Button</button>
          <button className='colored'>Colored Button</button>
          <button className='disabled'>Disabled Button</button>
        </div>
      </div>
    </div>
  )
}

export default App
