import React from 'react';
import '../../Page.css';
import Top_img1 from '../../images/top/top_img1.JPG';
import Top_img2 from '../../images/top/top_img2.JPG';

function Top(){
    return(
        <div className="whole_wrapper">
            <div className="inner">
                <h1 className="page_title">Top</h1>
                <div className="content">
                    <div className="img_space img_left">
                        <img src={Top_img1} alt="top_img1"/>
                        <span className="picture_description">Picture: NYC that was seen from the ship heading to Liberty Island.</span>
                    </div>
                    <p className="text_space text_right">
                        When I was a freshman in a collage, I studied abroad in America for 9 months(from September,2016 to 
                        May,2017) as my collage program.<br/>
                        While I studied in America, I experienced a lot of 
                        things, and learned a lot of things, languages, different culture, different life styles, and so on.
                    </p>
                </div>
                <div className="content">
                    <div className="img_space img_right">
                        <img src={Top_img2} alt="top_img2"/>
                        <span className="picture_description">Picture: Google in NYC.</span>
                    </div>
                    <p className="text_space text_left">
                        I think the time I spend there is one of the best memory in my life, also, I think this experience 
                        inspired me to study programmings and be a web engineer.<br/>
                        So, in this web page, I would like to share  my memory in America with you!<br/>
                        This web page is created by React and React Router.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Top;