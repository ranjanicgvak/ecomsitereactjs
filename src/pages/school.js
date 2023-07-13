
import React from 'react';
import Layout from '../components/Navbar/Layout';
import '../assets/css/school.css';
import jainImage from '../assets/images/jain.jpeg';
import kumarans from '../assets/images/kumarans.png';
import sophias from '../assets/images/sophias.jpg';
import rvschool from '../assets/images/rvschool.png';
import gurukul from '../assets/images/Logo- New Horizon Gurukul.jpg';
import cgis from '../assets/images/cgis.png';
import nhislogo from '../assets/images/NHIS LOGO Jpeg.jpg';
import bkimage from '../assets/images/BK.jpg';


// const School = () => {
//   return (
//     <div style={{ marginTop: "80vh" }}>
//       <h1>School</h1>
//     </div>
//   );
// };

const School = () => {
  return (
    <Layout>
     {/* <div style={{ marginTop: "80vh" }}>
      <h1>School</h1>
    </div> */}
    <div className="fixed-header school">
    <div className="container text-center ms-pt-s ms-pb-s">
        <a href="/browse/school" className="ms-pr-m">
            <img src={jainImage} height="50px" alt="" /><br></br>
            JGI
        </a>
        <a href="/browse/school" className="ms-pr-m">
            <img src={rvschool} height="50px" alt="" /><br></br>
            RV
        </a>
        <a href="/browse/school" className="ms-pr-m">
            <img src={sophias} height="50px" alt="" /><br></br>
            SOPHIA
        </a>
        <a href="/browse/school" className="ms-pr-m">
            <img src={kumarans} height="50px"  alt="" /><br></br>
            KUMARANS
        </a>
        <a href="/browse/new-horizon-gurukul" className="">
            <img src={gurukul}  alt="" height="50px" /><br></br>
            NEW HORIZON <br></br>
            GURUKUL
        </a>
        <a href="/browse/cisb" className="">
            <img src={cgis} height="50px"  alt="" /><br></br>
            CISB
        </a>
        <a href="/browse/new-horizon-international-school" className="">
            <img src={nhislogo} height="50px" alt="" /><br></br>
            NHIS
        </a>
    </div>
</div>
    <div className="col-sm-12">
                    <ol className="breadcrumb hidden-ms hidden-xs School">
                        <li><a href="/" className="gray-light">Home</a></li>
                        <li className="active">School</li>
                    </ol>
                    <h1 className="static-page-heading School school">
                        School
                    </h1>

                    <div className="static-page-description">
                        <div className="ms-mb-x static-page-content"><div className="ng-scope"><div className="row school1 height-md-100 ms-pos-rel">
                        <div className="col-md-12 text-center bottomLink">
                        Designer uniforms <span className="proximaBold ">for the doers.</span><br></br><i className="fas fa-chevron-down ms-fs-20"></i>
                        </div>
                    </div>
    
    <div className="row school2 height-md-100">
    <div className="col-md-12 text-center middleText">
    <div>Aesthetically advanced,</div>
    <div>our designer uniforms are <span className="proximaBold">a cut above the rest, </span></div>
    <div className="proximaBold">in every sense of the word.</div>
    </div>
    </div>
    
    <div className="row school3">
    <div className="height-md-100 ms-pos-rel school3">
    <div className="col-md-12 text-center bottomLink">
    Perfection. Now <span className="proximaBold">delivering to your doorstep.</span><br></br><i className="fas fa-chevron-down ms-fs-20"></i>
    </div>
    </div>
    
    <div className="school4 height-md-100">
    <div className="col-md-12 text-center middleText">
    <div>Less <span className="proximaBold">hassle. </span>More <span className="proximaBold">hustle.</span></div>
    <div>Our end-to-end e-commerce facility with</div>
    <div className="proximaBold">superior technology enables us to</div>
    <div className="proximaBold">deliver your order right to your doorstep.</div>
    </div></div>
    </div>
    
    <div className="row school5  ms-pos-rel">
    <div className="container">
    <div className="col-md-12 content">
    <h1 className="proximaBold ms-m-0">Be at ease.</h1>
    <h1 className="proximaBold ms-m-0">Everyday.</h1>
    <p className="proximaThin ms-mt-x">Our uniforms keep your children looking great <br></br> from the first day of school until the end-of-the-year picnic.</p>
    </div>
    <div className="longImg">
    <img src={bkimage} className="img-responsive" alt="img" />
    </div>
    </div>
    </div>
    
    <div className="row school6">
    <div className="container">
    <div className="col-md-12 content text-center">
    
    <div className="text-center ms-mb-x">
    <p className="ms-m-0">Designer Uniforms</p>
    <p className="signature">by</p>
    <p className="proximaThin logoName">acecraft</p>
    </div>
    
    <div className="proximaThin ms-mb-x ms-fs-20">
    Establish a <span className="proximaBold">signature look</span> for your school.
    </div>
    
    <div className="proximaThin ms-mb-x ms-fs-20 ms-pt-x">
    Looking to change your supplier?<br></br>
    <a className="btn btn-default ms-mt-x" data-toggle="modal" data-target="#getInTouch">Get In Touch</a>
    </div>
    
    </div>
    </div>
    </div>
    </div></div>
                    </div>
                </div>
    </Layout>
  );
};
  
export default School;