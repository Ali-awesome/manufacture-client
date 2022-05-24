import React from 'react';
import fact1 from '../../../images/icon-image/fact1.png';
import fact2 from '../../../images/icon-image/fact2.png';
import fact3 from '../../../images/icon-image/fact3.png';
import fact4 from '../../../images/icon-image/fact4.png';
import './Summery.css';

const Summery = () => {
    return (
        <div id="facts" class="facts-area bg-neutral">
            <div class="container">
                <div class="facts-wrapper">

                    <div class="ts-facts">
                        <div class="ts-facts-img">
                            <img loading="lazy" src={fact1} alt="facts-img" />
                        </div>
                        <div class="ts-facts-content">
                            <h2 class="ts-facts-num"><span class="counterUp" data-count="1789">0</span></h2>
                            <h3 class="ts-facts-title">Total Projects</h3>
                        </div>
                    </div>

                    <div class="ts-facts">
                        <div class="ts-facts-img">
                            <img loading="lazy" src={fact2} alt="facts-img" />
                        </div>
                        <div class="ts-facts-content">
                            <h2 class="ts-facts-num"><span class="counterUp" data-count="647">0</span></h2>
                            <h3 class="ts-facts-title">Staff Members</h3>
                        </div>
                    </div>

                    <div class="ts-facts">
                        <div class="ts-facts-img">
                            <img loading="lazy" src={fact3} alt="facts-img" />
                        </div>
                        <div class="ts-facts-content">
                            <h2 class="ts-facts-num"><span class="counterUp" data-count="4000">0</span></h2>
                            <h3 class="ts-facts-title">Hours of Work</h3>
                        </div>
                    </div>

                    <div class="ts-facts">
                        <div class="ts-facts-img">
                            <img loading="lazy" src={fact4} alt="facts-img" />
                        </div>
                        <div class="ts-facts-content">
                            <h2 class="ts-facts-num"><span class="counterUp" data-count="44">0</span></h2>
                            <h3 class="ts-facts-title">Countries Experience</h3>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Summery;