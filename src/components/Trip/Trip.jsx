import React from 'react';
import '../../Page.css';
import NiagaraFalls from '../../images/Trip/niagarafalls.JPG';
import TimesSquare from '../../images/Trip/timessquare.JPG';
import Trip_img1 from '../../images/Trip/trip_img1.JPG';
import Trip_img2 from '../../images/Trip/trip_img2.JPG';
import Trip_img3 from '../../images/Trip/trip_img3.JPG';
import Trip_img4 from '../../images/Trip/trip_img4.JPG';
import Trip_img5 from '../../images/Trip/trip_img5.JPG';
import Trip_img6 from '../../images/Trip/trip_img6.JPG';
import Trip_img7 from '../../images/Trip/trip_img7.JPG';
import Trip_img8 from '../../images/Trip/trip_img8.JPG';
import Trip_img9 from '../../images/Trip/trip_img9.JPG';
import Trip_img10 from '../../images/Trip/trip_img10.JPG';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

function Trip(){
    const images = [
    {
        original: `${Trip_img1}`,
        thumbnail: `${Trip_img1}`,
        description: "Grand Central Terminal",
    },
    {
        original: `${Trip_img2}`,
        thumbnail: `${Trip_img2}`,
        description: "The Statue of Liberty",
    },
    {
        original: `${Trip_img3}`,
        thumbnail: `${Trip_img3}`,
        description: "Landscape of NYC",
    },
    {
        original: `${Trip_img4}`,
        thumbnail: `${Trip_img4}`,
        description: "Me in front of Niagara Falls' billboard",
    },
    {
        original: `${Trip_img5}`,
        thumbnail: `${Trip_img5}`,
        description: "A church in New York (Maybe St. Patrick's Cathedral)",
    },
    {
        original: `${Trip_img6}`,
        thumbnail: `${Trip_img6}`,
        description: "Trump Tower",
    },
    {
        original: `${Trip_img7}`,
        thumbnail: `${Trip_img7}`,
        description: "Night Brooklyn bridge",
    },
    {
        original: `${Trip_img8}`,
        thumbnail: `${Trip_img8}`,
        description: "Night view from Brooklyn bridge",
    },
    {
        original: `${Trip_img9}`,
        thumbnail: `${Trip_img9}`,
        description: "New York Public Library",
    },
    {
        original: `${Trip_img10}`,
        thumbnail: `${Trip_img10}`,
        description: "Niagara Falls from the ship"
    },
  ];
    return(
        <div className="whole_wrapper">
            <div className="inner">
                <h1 className="page_title">Trip</h1>
                <p className="trip_top_text">
                    I couldn't visit a lot of places while studying abroad becase I was so busy with studying. But I visited NewYork City twice, and Niagara Falls twice.  
                </p>
                <div className="content">
                    <div className="img_space img_right">
                        <img src={NiagaraFalls} alt="NiagaraFalls"/>
                        <span className="picture_description">Picture: NiagaraFalls</span>
                    </div>
                    <p className="text_space text_left">
                        Niagara Falls was very amazing and powerful place! I had only seen it in books and on videos,<br/>so I was very glad to see
                        the real one! 
                        In Niagara Falls, I got on a ship and could see Niagara Falls very close up! <br/>
                        It was so dynamic and beautiful! If you like nature, I recomend to visit here!<br/>
                    </p>
                </div>
                <div className="content">
                    <div className="img_space img_left">
                        <img src={TimesSquare} alt="The countdown at Times Square"/>
                        <span className="picture_description">Picture: the countdown at Times Square in New York on New Year’s Eve</span>
                    </div>
                    <p className="text_space text_right">
                        Visiting New York City is one of the best memories in my life! <br/>
                        The first time, I  went to the countdown at Times Square in New York on New Year’s Eve with my friends! <br/>
                        It was so crowded at Times Square and my friends and me waited until the countdown was started<br/>
                        (we were wating for the countdown around 12 hours...), so we were so tired.<br/> But I think I had a valuable experience I had never experienced.<br/>
                        On the following day, my friends and me visit Grand Central Station and Liberty Island<br/>
                        that is famous for the Statue of Liberty.  The second time, <br/>I visted NYC to went sightseeing and enjoy some popular food in NYC. <br/>
                        If I have a chance, I would like to visit America and NYC again! 
                    </p>
                </div>
                <div className="pictures_gallery">
                    <h1>Pictures gallery</h1>
                    <p>I'm going to share some of my pictures about my trips in America here!</p>
                    <ImageGallery items={images} />
                </div>
            </div>
        </div>
    )
}

export default Trip;