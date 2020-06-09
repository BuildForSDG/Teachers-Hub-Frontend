/* eslint-disable react/prop-types */
/* eslint-disable import/prefer-default-export */
import Carousel from "nuka-carousel";
import React from "react";
import SrcImg4 from "../../assets/images/undraw_youtube_tutorial.svg";


export const BlogCard = (props) => (
        <>
            <Carousel style={{ minHeight: "100vh" }} slidesToShow={1} cellAlign="center" cellSpacing={20} dragging={true}>
            {props.data.data.message === "articles fetched!" ? props.data.data.articles.map((article) => (
                    <div className='row mb-5 align-items-center' key={article[0]}>

                        <div className='col-lg-7 mb-5' data-aos='fade-up' data-aos-delay='100'>
                            <img src={SrcImg4} alt='blog' className='img-fluid' width={900} height={700} />
                        </div>
                    <div className='col-lg-4 ml-auto' data-aos='fade-up' data-aos-delay='200'>
            <h2 className='text-black mb-4'>{article[1]}</h2>
                        <p className='mb-4'>{article[6]}</p>
                        <h6>Author: @{article[2]}</h6>
                         <div><div><button type="button" className="btn btn-secondary">READ MORE</button></div></div>
                    </div>
                </div>)) : <div className='card' style={{
                  width: "900px", height: "200px", margin: "0 auto", float: "none", textAlign: "center"
                }}><h4 style={{ marginTop: "60px" }}>No Articles added Yet</h4><h4>Please check again later</h4></div>}
                </Carousel>
</>
);
