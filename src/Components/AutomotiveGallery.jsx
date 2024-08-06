import React from 'react'
import './AutomotiveGallery.css'
const AutomotiveGallery = () => {
    const blurDivs = document.querySelectorAll(".blur-load")
blurDivs.forEach(div => {
    const img = div.querySelector("img")
    function loaded() {
        div.classList.add('loaded')
    }
    if (img.complete) {
        loaded()
    } else {
        img.addEventListener('load', loaded)
    }
})

  return (
    <section className='section-one'>

        <ul className='ulimage'>
            <li>
            <div className='blur-load' style={{ backgroundImage: `url('/blur/Artboard1.jpg')` }}>

                    <img src="/Artboard1.jpg" alt="" className='imageshome' />
                </div>
            </li>
            <li>
                <div>
                    <img src="/Artboard1.jpg" alt="" className='imageshome' />
                </div>
            </li>
            <li>
                <div>
                    <img src="/Artboard1.jpg" alt="" className='imageshome' />
                </div>
            </li>
            <li>
                <div>
                    <img src="/Artboard1.jpg" alt="" className='imageshome' />
                </div>
            </li>
        </ul>
    </section>
  )
}

export default AutomotiveGallery