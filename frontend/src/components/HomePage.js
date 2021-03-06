import React, { Component } from 'react';
import Navbar from './Navbar';
import PersonOne from "../stock_person_1.jpg";
import PersonTwo from "../stock_person_2.jpg";

const HomePage  = () => (
           <div class="home-main-container">
               {/* <Navbar /> */}
               <div class="homepage-container">
                   <div class="sidebar"></div>
                   <div class="matching-main-container">
                       <div class="matching-top-bar"></div>
                       <div class="matching-container">
                           <div class="person-container">
                               {/* <div id="info-slide-one"> */}
                                   <div class="image-container">
                                       <img class="profile-image" src={PersonOne}></img>
                                   </div>
                                   <div id="description-one" class="person-description">
                                       {/* <div id="page-one" class="text-container-main">
                                            <div class="center-header">Avery García</div>
                                            <div class="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">&nbsp; Avery knows how to play the piano</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">&nbsp; You both are passionate about poverty</div>
                                                </div>
                                            </div>
                                       </div> */}
                                       <div id="page-two" class="text-container-main">
                                            <div class="center-header">Avery García</div>
                                            <div class="text-big">2 Hacker Way Center, Menhigh Park</div>
                                            <div class="match-reason-preview-container">
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">Avery knows how to play the piano</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">You both are passionate about poverty</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="fas fa-fan"></i>
                                                    <div class="match-reason">Avery supports the BLM Movement</div>
                                                </div>
                                                <div class="match-reason-container">
                                                    <i class="far fa-check-circle fa-lg"></i>
                                                    <div class="match-reason">You both graduated from the University of Phoenix</div>
                                                </div>
                                            </div>
                                       </div>
                                   </div>
                                   
                               {/* </div> */}
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        );
export default HomePage;