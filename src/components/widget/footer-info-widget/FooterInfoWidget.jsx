import React, { Fragment } from "react";
import Icofont from 'react-icofont';
import Logo from "../../logo/Logo";
import '../../../css/social.css'

const FooterInfoWidget = () => {
    return (
        <Fragment>
            <Logo />
            <p className="mt-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem, adipisci!</p>
            <div className="footer_social flex mt-8">
                <a
                    href="https://www.facebook.com"
                    className={`facebook-style h-10 w-10 leading-10 text-center mr-3 last:mr-0`}
                >
                    <i class="icofont-facebook"></i>
                </a>
                <a
                    href="https://dribbble.com"
                    className={`dribbble-style h-10 w-10 leading-10 text-center mr-3 last:mr-0`}
                >
                    <i className="icofont-dribbble"></i>
                </a>
                <a
                    href="https://www.youtube.com"
                    className={`youtube-style h-10 w-10 leading-10 text-center mr-3 last:mr-0`}
                >
                    <i className="icofont-youtube-play"></i>
                </a>
                <a
                    href="https://www.twitter.com"
                    className={`twitter-style h-10 w-10 leading-10 text-center mr-3 last:mr-0`}
                >
                    <i className="icofont-twitter"></i>
                </a>
            </div>
        </Fragment>
    );
};

export default FooterInfoWidget;
