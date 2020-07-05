import React from 'react';
import '../../Page.css';
import Dance_img1 from '../../images/dance/dance_img1.JPG';
import Dance_img2 from '../../images/dance/dance_img2.JPG';

function Dance(){
    return(
        <div className="whole_wrapper">
            <div className="inner">
                <h1 className="page_title">Dance</h1>
                <div className="content">
                    <div className="img_space img_left">
                        <img src={Dance_img1} alt="dance_img1"/>
                        <span className="picture_description">Picture: Me dancing at dance performance for students of dance major</span>
                    </div>
                    <p className="text_space text_right">
                        I was good at dancing, so I used dance to make friends in America. <br/>
                        I took part in a dance club in the collage and I showed my dance at some parties!<br/>
                        Thanks to these activity, I got a friend who majored in dance, and the friend and me created a dance performance<br/> and showed it at a dance recital for students of dance major. <br/>
                        I was just a student of language school, so I was really happy<br/> to show my dance to undergraduate students of the collage and the professors of dance major. <br/>
                        After performance, the friend and me were praised for a performance by the students and professors!
                    </p>
                </div>
                <div className="content">
                    <div className="img_space img_right">
                        <img src={Dance_img2} alt="dance_img2"/>
                        <span className="picture_description">Picture: The picture taken in front of Broadway Dance Center<br/>(I could't get rightsize picture...)</span>
                    </div>
                    <p className="text_space text_left">
                        A second time visit to NYC, I went to Broadway Dance Center that is world-famous Dance studio<br/> to take dance classes with the friends who created and showed the dance performance together.<br/>
                        It was so exciting and I was really glad to take dance classes at one of the best dance studios while I was in America.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Dance;