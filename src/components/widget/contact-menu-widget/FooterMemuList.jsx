import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const FooterMemuList = () => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-5 text-md lg:mb-14">
                FOLLOW US
            </h3>
            <ul className="footer_contact_info">
                        <Link
                            to="/copywrite"
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            Copywriting
                        </Link>
                        <Link
                            to="/social-media"
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            Social Media
                        </Link>
                        <Link
                            to="/interactive-media"
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            Interactive Media
                        </Link>
                        <Link
                            to="/motion-design"
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            Motion Design
                        </Link>
                        <Link
                            to="/illustration"
                            className="block text-white mb-3 last:mb-0 hover:text-primary"
                        >
                            Illustration
                        </Link>
            </ul>
        </Fragment>
    );
};
export default FooterMemuList;
