import React from 'react';
import '../../Page.css';
import Study_img1 from '../../images/study/study_img1.JPG';
import Study_img2 from '../../images/study/study_img2.JPG';

function Study(){
    return(
        <div className="whole_wrapper">
            <div className="inner">
                <h1 className="page_title">Study</h1>
                <div className="content">
                    <div className="img_space img_right">
                        <img src={Study_img1} alt="study_img1"/>
                        <span className="picture_description">Picture: Street art in the collage campus.</span>
                    </div>
                    <p className="text_space text_left">
                        I studied in ELS that was added to The Collage at BROCKPORT that was in Rochester in New York State,<br/>
                        and Istudied English mainly. Rochester  was country side, so I have nothing to do, <br/>
                        but it was kind of good place to focus on studying.
                    </p>
                </div>
                <div className="content">
                    <div className="img_space img_left">
                        <img src={Study_img2} alt="study_img2"/>
                        <span className="picture_description">Picture: The Street near the collage.</span>
                    </div>
                    <p className="text_space text_right">
                        I studied abroad as a collage program, so almost all classmates were Japanese, <br/>
                        and I felt like it’s a little bit difficult to learn English in classes because we can speak Japanese in classes. <br/>
                        However, I didn’t gave up to learn English, I always try to speak in English to improve my English skills more.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Study;