import React from "react";
import { Link } from "react-router-dom";
import Arrow from '../../assets/images/icons/arrrow-icon.webp'
import E404 from '../../assets/images/others/404.webp'
const NotFoundPage = () => {
    return (
        <>
            <div className="not-found pt-20">
                <div className="container text-center">
                    <div className="error_title mb-10">
                        <h3 className="text-lg font-bold">OPPS...</h3>
                        <p className="text-35base uppercase font-bold">
                            SORRY, this page is not found.
                        </p>
                    </div>
                    <div className="mb-16 flex items-center justify-center">
                        <img
                            src={E404}
                            alt="404"
                        />
                    </div>
                    <Link to="/" className="text-white flex items-center justify-center w-fit block m-auto">
                        <p className="whitespace-nowrap">GO TO HOME</p>
                        <img
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src={Arrow}
                            alt="<"
                        />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default NotFoundPage;
