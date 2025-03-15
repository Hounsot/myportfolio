import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <nav className='O_Nav'>
        <p className='A_Nav_Title'>Matvey Vasilyev</p>
        <div className='W_NavLanguages'>
          <p className='A_NavLanguages_Language'>En</p>
          <p className='A_NavLanguages_Language'>Ru</p>
        </div>
      </nav>
      <div className='O_Main'>
        <h1 className='A_Main_Title'>I&nbsp;specialize in&nbsp;web design, UI, and&nbsp;brand identity. I&nbsp;can hire, train, inspire people and&nbsp;build teams. A&nbsp;deep understanding of&nbsp;the product development cycle and&nbsp;brand identity allows me&nbsp;to&nbsp;be&nbsp;a&nbsp;perfect partner for any CPO, CTO and&nbsp;CMO.</h1>
        <div className="C_Projects">
          <a className='M_Project'>
            <img src="" alt="" />
            <p className='A_Project_Title'>Project Title</p>
          </a>
          <a className='M_Project'>
            <img src="" alt="" />
            <p className='A_Project_Title'>Project Title</p>
          </a>
          <a className='M_Project'>
            <img src="" alt="" />
            <p className='A_Project_Title'>Project Title</p>
          </a>
          <a className='M_Project'>
            <img src="" alt="" />
            <p className='A_Project_Title'>Project Title</p>
          </a>
        </div>
      </div>
      <footer className='O_Footer'>
        <p className='A_Footer_Text'>© 2025 Matvey Vasilyev</p>
        <p className='A_Footer_Text'>Message me via: <span><a href='mailto:matvey.vasilyev@gmail.com' className='A_Footer_Text_Link'>email</a>, <a href='https://t.me/matvey_vasilyev' className='A_Footer_Text_Link'>telegram</a></span></p>
      </footer>
    </>
  )
}

export default App
