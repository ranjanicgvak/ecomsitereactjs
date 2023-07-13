
import React, { useEffect,useRef,useState } from 'react';
import Layout from '../components/Navbar/Layout';
import '../assets/css/college.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Carousel } from 'primereact/carousel';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import '../assets/css/carousel.css'; // Add your custom CSS for the carousel

const College = () => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => {
      clearInterval(autoplayInterval);
    };
  }, []);

    const carouselItems = [
      { src: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Screenshot 2019-09-14 at 2.16.47 PM.png', alt: 'Slide 1' },
      { src: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Screenshot 2019-09-18 at 4.06.18 PM.png', alt: 'Slide 2' },
      { src: 'http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Screenshot 2019-09-14 at 2.15.49 PM.png', alt: 'Slide 3' },
    ];
    
    const carouselItemTemplate = (item) => {
      return (
        <div className="carousel-item">
          <img src={item.src} alt={item.alt} className="img-responsive" />
          <div className="carousel-caption"></div>
        </div>
      );
    };
  useEffect(() => {
    // Initialize the carousel when the component mounts
    window.$('.carousel').carousel();
  }, []);
  return (
    
    // <div style={{ marginTop: "80vh" }}>
    //   <h1>College</h1>
    // </div>
    <Layout>
    
    <div className="row college1">
    <div className="container">
    <div className="col-lg-6"></div>
    <div className="col-lg-6 content">
    <h1 className=" proximaBold">The acecraft Collection.</h1>
    <p className="">Simple. Sharp.</p>
    <p className="">Detailed perfection that makes you</p>
    <p className="">look good and feel great. Put it on. It's like magic.</p>
    <div className="proximaBold ms-mt-x">Classic&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Absolute&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signature</div>
    </div>
    </div>
    </div>
    <div className="row college2 bg-grey">
    <div className="container">
    
    <div className="col-md-12 text-center clearfix">
    <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/woolen-ball.jpg" className="" height="200" alt="" />
    <h2 className="proximaBold">Naturally Cutting-Edge.</h2>
    <p className="text-black content">The ‘best of both worlds’ has a new definition. Every fabric in the acecraft line-up is made from a blend of two fibres to give you the best range. No tech involved - it’s just the touch of nature. </p>
    </div>
    
    <div className="sectionBox clearfix">
    <div className="col-md-6 text-center">
    <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Wool.png" className="" height="200" alt="" />
    </div>
    <div className="col-md-6">
    <h1 className="proximaBold content">The Blended Wool</h1>
    <p className="text-black content">The Blended Wool is a class apart - with a mix of polyester for its wrinkle/crease-resistance and wool for warmth and absorbency, end your day looking the same as how you began it. </p>
    </div>
    </div>
    
    <div className="sectionBox clearfix flexbox">
    <div className="col-md-6">
    <h1 className="proximaBold content">The Blended Cotton</h1>
    <p className="text-black content">The Blended Cotton is extremely strong and breathable. Easy to iron, this variant shrinks lesser than pure cotton and retains its colour, which makes it a favourite choice for your everyday college wear.
    </p>
    </div>
    <div className="col-md-6 text-center">
    <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Cotton.png" className="" height="200" alt="" />
    </div>
    </div>
    
    <div className="sectionBox clearfix">
    <div className="col-md-6 text-center">
    <img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/Viscose.png" className="" height="200" alt="" />
    </div>
    <div className="col-md-6">
    <h1 className="proximaBold content">The Blended Viscose</h1>
    <p className="text-black content">The Blended Viscose addition combines two ends of the spectrum - durability and a sense of softness. While the polyester contributes to resilience and shape retention, the viscose adds on to the overall absorbency, both sharpening and softening your look at the same time.</p>
    </div>
    </div>
    
    </div>
    </div>
    <div className="row college3">
    <div className="container">
    <div className="content">
    <p>THE ACECRAFT FIT</p>
    <h1 className="proximaBold">Comfy.</h1>
    <h1 className="proximaBold">Very comfy.</h1>
    <p>It’s not just the fabric - it’s also the fit.</p>
    <p>The shoulders and sleeves fit right while the body feels relaxed, making it undoubtedly the best.</p>
    </div>
    </div>
    </div>
    <div className="row college4">
    <div className="container">
    <div className="col-md-5">
    <h1 className="proximaBold">Your pre-trial. </h1>
    <h1 className="proximaBold">Powered by our AI.</h1>
    <p className="para">The acecraft Measurement Process is one among the world's most accurate methods. We set up a pre-trial event in your campus and make each one try on the right fit. No more guessing the right size business.</p>
    </div>
    <div>
    <div className="carousel-container">
    <Carousel
            value={carouselItems}
            itemTemplate={carouselItemTemplate}
            activeIndex={activeIndex}
            onChange={(e) => setActiveIndex(e.index)}
            numVisible={1}
            numScroll={1}
            circular
            autoplayInterval={3000}
          />
      </div>
      </div>
    </div>
    </div>
    <div className="row college5">
    <div className="container">
    <div className="content text-center">
    <p className="ms-m-0">Designer Uniforms</p>
    <p className="signature">by</p>
    <p className="proximaThin logoName">acecraft</p>
    <a className="btn btn-default" data-toggle="modal" data-target="#getInTouch">Get In Touch</a>
    </div>
    </div>
    </div>
    </Layout>

  );
};
  
export default College;