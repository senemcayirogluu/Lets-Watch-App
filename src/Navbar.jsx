import React, { useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [show, setHandleShow] = React.useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setHandleShow(true);
            } else {
                setHandleShow(false);
            }
        })
        return () => {
            window.removeEventListener('scroll', () => {
                document.querySelector('.navbar').classList.remove('nav_black')
            })
        }
    })

  return (
    <div className={`navbar ${show && 'navbar_black'}`}>
        <img className='logo' src="https://i.hizliresim.com/3keeqpv.png" alt="Lets Watch logo" />
        <img className='logo2' src="https://i.hizliresim.com/ir3yxlr.png" alt="Lets Watch logo" />
    </div>
  )
}

export default Navbar