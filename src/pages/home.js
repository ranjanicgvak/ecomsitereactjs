import React from 'react';

<div className="home-page">
		<div className="container" style={{ width:'100%' }}>
			<div className='row ms-ml-0 ms-mr-0 ms-pos-rel intro'>
				<div className='homeBanner ms-pos-rel'>
				<img src={Homeimage} alt="HomeImage" className="img-responsive" />
				</div>
				<div className="bottomBox">
				<span className="proximaThin">Choose Class</span>
				<br></br>
				<span className="proximaBold">over the common.</span>
				</div>
				<NavLink to="/page/college" className="bottomLink">
				<span className="">ACECRAFT FOR COLLEGES </span>
				<i className="fa fa-chevron-right"></i>
				</NavLink>
			</div>
			<div className="row ms-ml-0 ms-mr-0 ">
				<div className="col-md-6 home-school ms-pos-rel">
					<div class="ms-pos-rel ms-m-xs height-md-100" style={{ overflow: "hidden" }}>
						<img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home3.jpg" alt='Home-2' class="hover-image" />
					</div>
					<div className="bottomBox">
					<span className="proximaThin">A grade</span>
					<br></br>
					<span className="proximaBold">of Greatness.</span>
					</div>
					<a className="bottomLink" href="/page/school">
					<span className="">ACECRAFT FOR SCHOOLS</span>
					<i className="fas fa-chevron-right"></i>
					</a>
				</div>
				<div className="col-md-6 home-enterprise ms-pos-rel">
					<div class="ms-pos-rel ms-m-xs height-md-100" style={{ overflow: 'hidden'}}>
				<img src="http://cdn.storehippo.com/s/5997cc7c4d6e8ffa20e50aae/ms.files/home4.jpg" className="hover-image" alt='Home3' /></div>
				<div class="bottomBox">
				<span class="proximaThin">workwear</span>
				<br></br>
				<span class="proximaBold">Redefined.</span>
				</div>
				<a class="bottomLink" href="/page/enterprise">
				<span class="">ACECRAFT FOR ENTERPRISES</span>
				<i class="fas fa-chevron-right"></i>
				</a>
				</div>
			</div>
			
			
     
		
	</div>
</div>