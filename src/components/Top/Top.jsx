import React from 'react';
import '../../Page.css';

function Top(){
    return(
        <div className="whole_wrapper">
            <div className="inner">
                <h1 className="page_title">Top</h1>
                <div className="content">
                    <div className="img_space img_left">

                    </div>
                    <p className="text_space text_right">
                        When I was a freshman in a collage, I studied abroad in America for 9 months(from September,2016 to 
                        May,2017) as my collage program.<br/>
                        While I studied in America, I experienced a lot of 
                        things, and learned a lot of things, languages, different culture, different life styles, and so on.
                    </p>
                </div>
                <div className="content">
                    <p className="text_space text_left">
                        I think the time I spend there is one of the best memory in my life, also, I think this experience 
                        inspired me to study programmings and be a web engineer.<br/>
                        So, in this web page, I would like to share  my memory in America with you!<br/>
                        This web page is created by React and React Router.
                    </p>
                    <div className="img_space img_right">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top;