import React, { useEffect, useRef, useState } from 'react';
import './AutomotiveGallery.css';

const AutomotiveGallery = () => {
  const blurDivRefs = useRef([]);
  const [loadedImages, setLoadedImages] = useState(new Set());
console.log(blurDivRefs)
  useEffect(() => {
    blurDivRefs.current.forEach((blurDiv) => {
      if (blurDiv && loadedImages.has(blurDiv)) {
        blurDiv.classList.add('loaded');
      }
    });
  }, [loadedImages]);

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set(prev).add(blurDivRefs.current[index]));
  };

  return (
    <section className='section-one'>
      <ul className='ulimage'>
        {/* <div
          className='blur-load'
          style={{ backgroundImage: `url('/blur/Artboard1.jpg')` }}
        >
          <img
            src="/Artboard1.jpg"
            className='imageshome'
            loading="lazy"
            ref={(el) => blurDivRefs.current[0] = el}
            alt=""
            onLoad={() => handleImageLoad(0)}
          />
        </div> */}

        <li>
          <div
          className='blur-load'
          style={{ backgroundImage: `url('/blur/main-photo-cyber.JPG')` }}
          >
            <img
              src="/main-photo-cyber.JPG"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[1] = el}
              onLoad={() => handleImageLoad(1)}
            />
          </div>
        </li>
       
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_7225.JPG')`  }}
          >
            <img
              src="/IMG_7225.JPG"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[2] = el}
              onLoad={() => handleImageLoad(2)}
            />
          </div>
        </li>
       <li>

          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_6832.jpg')`}}
           >
            <img
              src="/IMG_6832.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[3] = el}
              onLoad={() => handleImageLoad(3)}
              />
          </div>
        
              </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_7060.JPG')` }}
          >
            <img
              src="/IMG_7060.JPG"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[4] = el}
              onLoad={() => handleImageLoad(4)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/Further-shot.jpg')`  }}
          >
            <img
              src="/Further-shot.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[5] = el}
              onLoad={() => handleImageLoad(5)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_6620.JPG')` }}
          >
            <img
              src="/IMG_6620.JPG"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[6] = el}
              onLoad={() => handleImageLoad(6)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_6632.jpg')` }}
          >
            <img
              src="/IMG_6632.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[7] = el}
              onLoad={() => handleImageLoad(7)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/Artboard1.jpg')` }}
          >
            <img
              src="/Artboard1.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[8] = el}
              onLoad={() => handleImageLoad(8)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_6681.jpg')` }}
          >
            <img
              src="/IMG_6681.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[9] = el}
              onLoad={() => handleImageLoad(9)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_6679.jpg')` }}
          >
            <img
              src="/IMG_6679.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[10] = el}
              onLoad={() => handleImageLoad(10)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/IMG_7223.JPG')` }}
          >
            <img
              src="/IMG_7223.JPG"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[11] = el}
              onLoad={() => handleImageLoad(11)}
            />
          </div>
        </li>
        <li>
          <div
           className='blur-load'
           style={{ backgroundImage: `url('/blur/Poster2.jpg')` }}
          >
            <img
              src="/Poster2.jpg"
              alt=""
              loading="lazy"
              className='imageshome'
              ref={(el) => blurDivRefs.current[12] = el}
              onLoad={() => handleImageLoad(12)}
            />
          </div>
        </li>
        
      </ul>
    </section>
  );
};

export default AutomotiveGallery;