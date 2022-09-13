import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Panda from '../../../assets/images/team-logo/upcoming-game-thumb1.webp'
import Ninza from '../../../assets/images/team-logo/upcoming-game-thumb2.webp'
import Anonymous from '../../../assets/images/team-logo/upcoming-game-thumb3.webp'
import Gamer from '../../../assets/images/team-logo/upcoming-game-thumb4.webp'
import Holigans from '../../../assets/images/team-logo/upcoming-game-thumb5.webp'
import Bull from '../../../assets/images/team-logo/upcoming-game-thumb6.webp'

const FooterWinnerWidget = ({ infoData }) => {
    return (
        <Fragment>
            <h3 className="uppercase font-bold mb-5 text-md lg:mb-14">
                INFORMATION
            </h3>
            <div className="flex">
                <div className="footer_winners_thumb grid gap-2 grid-cols-3">
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Panda}
                                    alt={Panda}
                                />
                            </Link>
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Holigans}
                                    alt={Holigans}
                                />
                            </Link>
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Gamer}
                                    alt={Gamer}
                                />
                            </Link>
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Ninza}
                                    alt={Ninza}
                                />
                            </Link>
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Anonymous}
                                    alt={Anonymous}
                                />
                            </Link>
                            <Link
                                to="/"
                                className="w-73 h-73 inline-block p-3 border-2 text-center border-solid border-secondary-80 rounded-2xl flex justify-center item-center"
                            >
                                <img
                                    className="w-8"
                                    src={Bull}
                                    alt={Bull}
                                />
                            </Link>
                </div>
            </div>
        </Fragment>
    );
};

export default FooterWinnerWidget;
