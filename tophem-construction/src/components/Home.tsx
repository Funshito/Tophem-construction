import '../App.css'

import general from "../assets/Road 1.jpeg"
import logo1 from "../assets/big.jpeg"
import logo2 from "../assets/er.jpeg"
import logo3 from "../assets/fast.png"
import logo4 from "../assets/firs.png"
import logo5 from "../assets/jk.png"
import logo6 from "../assets/sfg.png"



function Home() {
  return (
    <> 
        {/* pre nav section  */}
        <div className="px-5 justify-content-between bg-primary text-white fs-6 pre-nav sm:hidden">
            <div className="col-4">
                Welcome to Tophem Construction
            </div>
            <div className="">
                <div className="flex">
                    <i className="bi-envelope"> construction@tophem.com</i>
                </div>
            </div>
            <div className=" ">
                <a href="#" target="_blank"><i className="bi-linkedin me-2"></i></a>
                <a href="#" target="_blank"><i className="bi-instagram"></i></a>
            </div>
        </div>


        {/* navbar section  */}
        <div className='justify-content-between align-items-center nav-section' style={{backgroundColor: 'whitesmoke'}}>
            <div className='logo'>
                <a href="/"><img src="../../public/logo2.png" alt="" /></a>
            </div>

            <div className='navigate'>
                <ul className='fs-5'>
                    <a href=""><li>Home</li></a>
                    <a href=""><li>About us</li></a>
                    <a href=""><li>Civil engineering</li></a>
                    <a href=""><li>Contact</li></a>
                </ul>
            </div>
            <div>
                <h3>+2348033784778</h3>
            </div>
            <div className='mobile-menu'>
                <i className="bi bi-list"></i>
            </div>
        </div>


        {/* hero section  */}
        <div className='hero'>
            <div >
                <h1>Best Construction Company in Nigeria,</h1>
                <h2>Trusted, Reliable and Committed</h2>
            </div>
        </div>

        <div className='stats'>
            <div className='box'>
                <h1>120</h1>
                <p>Completed Projects</p>
            </div>

            <div className='box'>
                <h1>80</h1>
                <p>Clients</p>
            </div>

            <div>
            </div>
        </div>




        {/* About section  */}
        <div className='about'>
            <div ><img src={general} alt="" /></div>
            <div>
                <h1>MESSAGE FROM US</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, voluptatum fugit dolorum aspernatur ducimus omnis illum itaque aperiam deleniti dolorem. Voluptas perferendis a deserunt id possimus. Consectetur voluptatum consequuntur obcaecati?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi rem quis, sit excepturi aspernatur cum dolore, laboriosam accusantium, corrupti commodi corporis fugiat porro perferendis omnis? Repellendus fugiat molestias ad natus?
                </p>
            </div>
        </div>

        <div className='short-info'>
            <div className='box-info'>
                <div><i className="bi bi-gear fs-1 fw-bolder" title="Settings"></i></div>
                <h1>Civil Engineering</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, expedita sed ratione molestias sapiente dolor unde, iste beatae autem, quisquam tenetur. Illo, quidem! Eius fugit sint molestiae quibusdam non ratione?</p>
            </div>
            <div className='box-info'>
                <div>
                    <i className="bi bi-rulers fs-1 fw-bolder "></i>
                    <i className="bi bi-file-earmark-text fs-1 fw-bolder"></i>
                </div>
                <h1>Civil Engineering</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, expedita sed ratione molestias sapiente dolor unde, iste beatae autem, quisquam tenetur. Illo, quidem! Eius fugit sint molestiae quibusdam non ratione?</p>
            </div>
            <div className='box-info'>
                <div>
                <i className="bi bi-house fs-1 fw-bolder"></i>
                <i className="bi bi-recycle fs-1 fw-bolder"></i>
                </div>
                <h1>Civil Engineering</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa, expedita sed ratione molestias sapiente dolor unde, iste beatae autem, quisquam tenetur. Illo, quidem! Eius fugit sint molestiae quibusdam non ratione?</p>
            </div>
        </div>


        {/* what we do section  */}
        <div className='what-we-do'>
            <h1>
                WHAT WE DO
            </h1>

            <div className='what-we-do-box'>
                <div className=''>
                    <img src={general} alt="" />
                    <h2 className=''>Road Construction</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facere culpa ex ipsa, dolores, ea autem impedit vel fugiat numquam qui iste, eos officiis. Nobis facere a maiores corporis officiis.</p>
                    <a href="">
                        <div className='d-flex'>
                            <p>More...</p>
                            <i className='bi bi-arrow-right fs-4 text-primary ms-2'></i>
                        </div>
                    </a>
                </div>

                <div className=''>
                    <img src={general} alt="" />
                    <h2 className=''>Building Construction</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facere culpa ex ipsa, dolores, ea autem impedit vel fugiat numquam qui iste, eos officiis. Nobis facere a maiores corporis officiis.</p>
                    <a href="">
                        <div className='d-flex'>
                            <p>More...</p>
                            <i className='bi bi-arrow-right fs-4 text-primary ms-2'></i>
                        </div>
                    </a>
                </div>

                <div className=''>
                    <img src={general} alt="" />
                    <h2 className=''>Consultation</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium facere culpa ex ipsa, dolores, ea autem impedit vel fugiat numquam qui iste, eos officiis. Nobis facere a maiores corporis officiis.</p>
                    <a href="" >
                        <div className='d-flex'>
                            <p>More...</p>
                            <i className='bi bi-arrow-right fs-4 text-primary ms-2'></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>



{/* promotion section  */}

        <div className='promotion'>
            <h1  style={{textTransform: 'uppercase', color: 'orange'}}>Work with us today and get a lasting structure</h1>
        </div>



        {/* testimonial section  */}
        <div className='testimonial'>
            <div>
                <h1>
                    TESTIMONIAL
                </h1>
                <div className='text-center mt-5'>
                    <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt accusantium quidem atque, molestias totam magni aspernatur amet, iusto ipsum quas culpa incidunt! Consectetur quod, fugit ad rem cupiditate sapiente repellendus.</p>

                    <img src="" alt="" style={{width: '80px', height: '80px', backgroundColor: 'orange', borderRadius: '100%'}}/>
                    <h2 className='fs-5 mt-2 fw-bold'>John Wick</h2>
                    <h3 className='fs-6'>Head of Co at Co</h3>
                </div>
            </div>
        </div>



        {/* newsletter section  */}
        <div className='newsletter'>
            <div className=''>
                <h1 style={{borderBottom: '5px solid orange'}}>
                    NEWSLETTER
                </h1>
            
                <p className='fs-2'>Keep up with our latest news and events.</p>
                <form action="" className='newsletter-form'>
                    <input type="email"  className='form-control'/>
                    <button type='submit' className=''>SUBSCRIBE</button>
                </form>
            </div>
        </div>



        {/* brands that trust section  */}
        <div className='brands'>
            <h2>
                BRANDS THAT TRUST US
            </h2>
            <div className=''>
                <img src={logo1} alt="image1" style={{width: '100px'}}/>
                <img src={logo2} alt="image1" style={{width: '100px'}}/>
                <img src={logo3} alt="image1" style={{width: '100px'}}/>
                <img src={logo4} alt="image1" style={{width: '100px'}}/>
                <img src={logo5} alt="image1" style={{width: '100px'}}/>
                <img src={logo6 } alt="image1" style={{width: '100px'}}/>
            </div>
        </div>



        {/* footer section  */}
        <div className='bg-dark  text-white footer-section'>
            <div className='footer-section-logo'>
                <a href="/"><img src="../../public/logo2.png" alt="" /></a>
            
            </div>
            <div className='footer-nav'>
                <div className=''>
                    <h3>NAVIGATE</h3>
                    <ul style={{listStyle: 'none', display: "block",fontWeight: '700', lineHeight: '40px'}} className='fs-6'>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>Home</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>About us</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>Civil engineering</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9',  }} href=""><li>Contact</li></a>
                    </ul>
                </div>
                <div className=''>
                    <h3>COMPANY</h3>
                <ul style={{listStyle: 'none', display: "block",fontWeight: '700', lineHeight: '40px'}} className='fs-6'>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>Blog</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>Projects</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9', }} href=""><li>Machinery</li></a>
                        <a style={{textDecoration: 'none', color: '#a9a9a9',  }} href=""><li>Staffs</li></a>
                    </ul>
                </div>
                <div className='' style={{width: '400px'}}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptate repellendus vitae vel ad et tempore, esse hic consectetur incidunt voluptas perspiciatis iure accusamus dicta ex cumque? Explicabo, accusantium placeat!</p>
                    <a href="#" target="_blank"><i className="bi-linkedin me-5 fs-1"></i></a>
                    <a href="#" target="_blank"><i className="bi-instagram fs-1"></i></a>
                </div>
            </div>
        </div>
        
        <div className='footer-footer'>
            <p>&copy;All Rights Reserved. date Tophem Constructions</p>
        </div>
    </>
  )
}

export default Home