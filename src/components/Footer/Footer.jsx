import React from "react";

const Footer = () => (<footer className='footer-section bg-white'>
    <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <h3>About Teachers Hub</h3>
                <p>Teachers Hub is a thriving online community where teachers can watch,
                share, and learn diverse techniques to help them get even more qualified.</p>
            </div>

            <div className='col-md-3 ml-auto'>
                <h3>Links</h3>
                <ul className='list-unstyled footer-links'>
                    <li><a href='/#home-section'>Home</a></li>
                    <li><a href='/#courses-section'>Courses</a></li>
                    <li><a href='/#blogs-section'>Blog</a></li>
                    <li><a href='/#partners-section'>Partnerships</a></li>
                    <li><a href='/#community-section'>Community</a></li>
                </ul>
            </div>
            <div className='col-md-4'>
                <h3>Subscribe</h3>
                <p>Subscribe to receive monthly news letters</p>
                <form className='footer-subscribe'>
                    <div className='d-flex mb-5'>
                        <input type='text' className='form-control rounded-0' placeholder='Email' />
                        <input type='submit' className='btn btn-primary rounded-0' value='Subscribe' />
                    </div>
                </form>
            </div>
        </div>
    </div>
</footer>);

export default Footer;
