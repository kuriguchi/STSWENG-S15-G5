import './OurStory.css';

import pageTitle from '../../assets/ourstory-imgs/our_story_page_title.svg';
import pic1 from '../../assets/ourstory-imgs/pic1.png';
import pic2 from '../../assets/ourstory-imgs/pic2.png';
import cupcakeIcon from '../../assets/ourstory-imgs/cupcake_icon.svg';
import cookieIcon from '../../assets/ourstory-imgs/cookie_icon.svg';
import breadIcon from '../../assets/ourstory-imgs/bread_icon.svg';

const OurStory = () => {
    return (
        <main>
            <img src={pageTitle} alt="Our Story" className="page-title" />
            <div className="our-story-section">
                <img src={pic1} alt="rolling bread" className="our-story-imgs" id="ourStoryImg1" />
                <img src={cupcakeIcon} alt="cupcake icon" className="our-story-icons" id="ourStoryCupcakeIcon" />
                <div className="our-story-msgs" id="ourStoryMsg1">
                    Welcome to Mis&apos;Cake, where every bite tells a story!
                    <br />
                    <br />
                    <br /> At Mis&apos;Cake, we believe that life is too short to skip dessert, and that&apos;s why we
                    pour our hearts into crafting delectable treats that are as beautiful as they are delicious. From
                    classic favorites to innovative creations, our cakes are baked with love and attention to detail,
                    ensuring each bite is a moment of pure bliss.
                </div>
                <img src={cookieIcon} alt="cookie icon" className="our-story-icons" id="ourStoryCookieIcon" />
                <img src={pic2} alt="" className="our-story-imgs" id="ourStoryImg2" />
                <div className="our-story-msgs" id="ourStoryMsg2">
                    At Mis&apos;Cake, we understand that every celebration is unique, which is why we offer custom cake
                    designs tailored to your preferences. Whether you dream of a whimsical wedding cake, a playful
                    birthday masterpiece, or a sophisticated dessert spread for your corporate event, our talented team
                    will work closely with you to bring your vision to life.
                </div>
                <img src={breadIcon} alt="bread icon" className="our-story-icons" id="ourStoryBreadIcon" />
            </div>
        </main>
    );
};

export default OurStory;
