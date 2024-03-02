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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum malesuada. Fusce a
                    urna ac ligula eleifend eleifend quis vulputate leo. Vestibulum egestas, lacus a cursus dictum,
                    risus ipsum tincidunt mauris, at tincidunt tellus tellus sit amet nisi. Maecenas felis sapien,
                    faucibus id elementum eget, blandit a risus. Praesent luctus, ex at maximus commodo, lacus arcu
                    vehicula lorem, sit amet faucibus ligula ipsum ut mi. Aenean dapibus nunc quis lectus feugiat
                    dictum. Nulla pellentesque ipsum magna, ac pharetra ante iaculis vitae. Praesent rutrum placerat
                    vestibulum. Quisque sit amet venenatis nulla. Sed et ipsum metus. Vestibulum sed blandit eros. In
                    sit amet urna et mi varius posuere. Sed pulvinar in metus id fermentum. Donec ut tortor sodales,
                    gravida libero nec, scelerisque justo. Nam id sem euismod, interdum nisi a, varius eros. Curabitur
                    ac lorem arcu. Ut convallis urna eget laoreet efficitur. Vestibulum semper sit amet quam ut
                    efficitur. Donec id urna sit amet velit placerat hendrerit. Ut purus dolor, efficitur eu porttitor
                    quis, egestas ac nunc. Nullam eleifend dolor ac malesuada vulputate. Proin molestie urna nec finibus
                    feugiat.
                </div>
                <img src={cookieIcon} alt="cookie icon" className="our-story-icons" id="ourStoryCookieIcon" />
                <img src={pic2} alt="" className="our-story-imgs" id="ourStoryImg2" />
                <div className="our-story-msgs" id="ourStoryMsg2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus maximus interdum malesuada. Fusce a
                    urna ac ligula eleifend eleifend quis vulputate leo. Vestibulum egestas, lacus a cursus dictum,
                    risus ipsum tincidunt mauris, at tincidunt tellus tellus sit amet nisi. Maecenas felis sapien,
                    faucibus id elementum eget, blandit a risus. Praesent luctus, ex at maximus commodo, lacus arcu
                    vehicula lorem, sit amet faucibus ligula ipsum ut mi. Aenean dapibus nunc quis lectus feugiat
                    dictum. Nulla pellentesque ipsum magna, ac pharetra ante iaculis vitae. Praesent rutrum placerat
                    vestibulum. Quisque sit amet venenatis nulla. Sed et ipsum metus. Vestibulum sed blandit eros. In
                    sit amet urna et mi varius posuere. Sed pulvinar in metus id fermentum. Donec ut tortor sodales,
                    gravida libero nec, scelerisque justo. Nam id sem euismod, interdum nisi a, varius eros. Curabitur
                    ac lorem arcu. Ut convallis urna eget laoreet efficitur. Vestibulum semper sit amet quam ut
                    efficitur. Donec id urna sit amet velit placerat hendrerit. Ut purus dolor, efficitur eu porttitor
                    quis, egestas ac nunc. Nullam eleifend dolor ac malesuada vulputate. Proin molestie urna nec finibus
                    feugiat.
                </div>
                <img src={breadIcon} alt="bread icon" className="our-story-icons" id="ourStoryBreadIcon" />
            </div>
        </main>
    );
};

export default OurStory;
