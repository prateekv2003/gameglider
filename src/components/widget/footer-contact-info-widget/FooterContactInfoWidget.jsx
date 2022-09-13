import React, { Fragment } from "react";

const FooterContactInfoWidget = ({ infoData }) => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-5 text-md lg:mb-14">
                CONTACT
            </h3>
            <div className="footer_contact_info">
                <div
                    className="footer_contact_info_list mb-5 last:mb-0"
                >
                    <span className="text-primary mb-3 block">
                        Location:
                    </span>
                    <p>RN-03/B, Asalfa, Ghatkopar(West), Mumbai-84 </p>
                </div>
                <div
                    className="footer_contact_info_list mb-5 last:mb-0"
                >
                    <span className="text-primary mb-3 block">
                        Phone:
                    </span>
                    <p>+91 996 750 8702</p>
                </div>
            </div>
        </Fragment>
    );
};
export default FooterContactInfoWidget;