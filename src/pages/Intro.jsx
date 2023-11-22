import React from 'react';
import Layout from '../components/Layout';
import background from './image.jpg';
import Footer from '../components/Footer';

import { useState } from 'react';
import './Carousel.css';

// Import your three images
import image1 from '../components/1.png';
import image2 from '../components/2.png';
import image3 from '../components/3.png';

const Intro = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const goToNextPage = () => {
    goToPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    goToPage(currentPage - 1);
  };

  return (
    <>
      <Layout />
      <div className="main-wrapper" style={{ backgroundImage: `url(${background})`, backgroundSize: '1400px' }}>
       <div className="article-items">

        <div class="article-item">
                        <div class="article-item-img">
                            <div class="tags-line">
                                <a href="/blog/indoor-plants">Indoor Plants</a>
                            </div>
                            <a href="/blog/indoor-plants/how-to-propagate-plants"><img src="https://blog-blossom.s3.appcnt.com/image/22/07/04/62c2d2375a7f2/_orig/Blossom_10_Plant_Propagation_Things_to_Know_539x397.jpg" alt=""></img></a>
                        </div>
                        <a href="/blog/indoor-plants/how-to-propagate-plants" class="article-content">
                            <div class="article-about">
                                                                    <div class="article-info">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.2857C13.4715 16.2857 16.2857 13.4715 16.2857 10C16.2857 6.5285 13.4715 3.71429 10 3.71429C6.5285 3.71429 3.71429 6.5285 3.71429 10C3.71429 13.4715 6.5285 16.2857 10 16.2857ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#63B68E"></path>
                                            <rect x="9.38118" y="6.33333" width="0.666667" height="4.66667" rx="0.333333" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                            <rect x="12.4241" y="11.6386" width="0.666667" height="3.14896" rx="0.333333" transform="rotate(116.097 12.4241 11.6386)" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                        </svg>
                                        <span>8 min read</span>
                                    </div>
                                                                <div class="article-about__hdr">
                                    Plant propagation: things to know
                                </div>
                                <div class="article-about__txt">
                                    Propagation is an easy way to expand your plant collection! Learn more about common propagation methods and find out which will work best for your houseplants.
                                </div>
                            </div>
                            <div class="article-about__more">
                                <span>Read more</span>
                            </div>
                        </a>
                    </div>
                    <div class="article-item">
                        <div class="article-item-img">
                            <div class="tags-line">
                                <a href="/blog/indoor-plants">Indoor Plants</a>
                            </div>
                            <a href="/blog/indoor-plants/houseplant-lighting-guide"><img src="https://blog-blossom.s3.appcnt.com/image/22/05/30/6294b960051b5/_orig/Blosom_4_House_Plant_Lighting_Guide_539_x397.jpg" alt=""></img></a>
                        </div>
                        <a href="/blog/indoor-plants/houseplant-lighting-guide" class="article-content">
                            <div class="article-about">
                                                                    <div class="article-info">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.2857C13.4715 16.2857 16.2857 13.4715 16.2857 10C16.2857 6.5285 13.4715 3.71429 10 3.71429C6.5285 3.71429 3.71429 6.5285 3.71429 10C3.71429 13.4715 6.5285 16.2857 10 16.2857ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#63B68E"></path>
                                            <rect x="9.38118" y="6.33333" width="0.666667" height="4.66667" rx="0.333333" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                            <rect x="12.4241" y="11.6386" width="0.666667" height="3.14896" rx="0.333333" transform="rotate(116.097 12.4241 11.6386)" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                        </svg>
                                        <span>7 min read</span>
                                    </div>
                                                                <div class="article-about__hdr">
                                    Houseplant light requirements
                                </div>
                                <div class="article-about__txt">
                                    Not sure if your indoor plants receive enough light? Learn more about natural light and find out how to choose the best spot for your plants in this article.
                                </div>
                            </div>
                            <div class="article-about__more">
                                <span>Read more</span>
                            </div>
                        </a>
                    </div>
                    
                    <div class="article-item">
                        <div class="article-item-img">
                            <div class="tags-line">
                                <a href="/blog/indoor-plants">Indoor Plants</a>
                            </div>
                            <a href="/blog/indoor-plants/houseplant-temperature-guide"><img src="https://blog-blossom.s3.appcnt.com/image/22/05/30/6294946f7bf49/_orig/Blosom_2_House_Plants_Temperature_Guide_539_x397.jpg" alt=""></img></a>
                        </div>
                        <a href="/blog/indoor-plants/houseplant-temperature-guide" class="article-content">
                            <div class="article-about">
                                                                    <div class="article-info">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.2857C13.4715 16.2857 16.2857 13.4715 16.2857 10C16.2857 6.5285 13.4715 3.71429 10 3.71429C6.5285 3.71429 3.71429 6.5285 3.71429 10C3.71429 13.4715 6.5285 16.2857 10 16.2857ZM10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" fill="#63B68E"></path>
                                            <rect x="9.38118" y="6.33333" width="0.666667" height="4.66667" rx="0.333333" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                            <rect x="12.4241" y="11.6386" width="0.666667" height="3.14896" rx="0.333333" transform="rotate(116.097 12.4241 11.6386)" fill="#AEAFC9" stroke="#63B68E" stroke-width="0.666667"></rect>
                                        </svg>
                                        <span>7 min read</span>
                                    </div>
                                                                <div class="article-about__hdr">
                                    Houseplant temperature guide
                                </div>
                                <div class="article-about__txt">
                                    Houseplants have specific temperature needs in order to grow and thrive. Check out this article and learn how to find the best indoor plants temperatures!
                                </div>
                            </div>
                            <div class="article-about__more">
                                <span>Read more</span>
                            </div>
                        </a>
                    </div>
       </div>
        </div>
        
      <Footer />
    </>
  );
};

export default Intro;
