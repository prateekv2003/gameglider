import React, { Fragment } from "react";
import GamingUpdateArea from "./gaming-update-widget/GamingUpdateArea";
import FooterInfoWidget from "../widget/footer-info-widget/FooterInfoWidget";
import FooterContactInfoWidget from "../widget/footer-contact-info-widget/FooterContactInfoWidget";
import FooterWinnerWidget from "../widget/todays-winners-widget/FooterWinnerWidget";
import FooterMemuList from "../widget/contact-menu-widget/FooterMemuList";

const Footer = ({ data }) => {
    return (
        <Fragment>
            <GamingUpdateArea />
            <footer style={{color:"#fff"}}>
                <div className="py-16 md:py-24">
                    <div className="container">
                        <div className="grid gap-8 md:gap-6 lg:gap-6 xxl:gap-16 grid-cols-1 sm:grid-cols-12">
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-4 lg:mr-12">
                                <FooterInfoWidget/>
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-3">
                                <FooterContactInfoWidget/>
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-3">
                                <FooterWinnerWidget/>
                            </div>
                            <div className="footer_widget_list sm:col-span-6 lg:col-span-2">
                                <FooterMemuList/>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="footer-bottom bg-secondary-70">
                    <div className="container">
                        <div className=" flex flex-col md:flex-row md:justify-between items-center py-6">
                            <div className="">
                                &copy; {new Date().getFullYear()} BONX MADE WITH{" "}
                                <i className="icofont-heart"></i> BY
                                <a
                                    className="hover:text-primary"
                                    href="https://hasthemes.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {" "}
                                    HasThemes
                                </a>
                            </div>
                            <div className="footer-copyright-right">
                                <div className="flex">
                                    <a
                                        href="https://hasthemes.com/"
                                        className="text-white hover:text-primary"
                                    >
                                        Terms &amp; Condition{" "}
                                    </a>
                                    <span className="mx-3"> || </span>
                                    <a
                                        href="https://hasthemes.com/"
                                        className="text-white hover:text-primary"
                                    >
                                        Privacy Policy{" "}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </footer>
        </Fragment>
    );
};

export default Footer;
