import React from "react";
import Button from '../../shared/button/Button'
import ArrowIcon2 from '../../../assets/images/icons/arrrow-icon2.webp'

const GameCard = ({ alt, slug, image, buttons }) => {
    const game_thumb =
        "group mt-10 relative text-white font-bold after:absolute content-after after:border-4 after:bg-gray-80 after:z-10 after:border-opacity-50 after:w-full after:h-full after:z-0  after:rounded-5xl after:top-1/2  after:left-1/2  after:transform  after:-translate-x-2/4  after:-translate-y-2/4  after:transition  after:opacity-0  hover:after:opacity-70 before:bg-secondary-100 before:empty-content before:absolute before:w-full  before:h-full before:z-10 before:rounded-5xl before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-70";
    
        console.log(image)
    
        return (
        <div className="game-card relative">
            <div className={game_thumb}>
                <img
                    className="rounded-4xl w-full"
                    src={image}
                    alt={alt}
                />
                {buttons &&
                    buttons.map(({ id, content, ...props }) => (
                        <Button
                            key={id}
                            {...props}
                            path={`/games/${slug}`}
                            className="items-center justify-center text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden group-hover:flex"
                        >
                            {content}
                            <img
                                className="align-middle ml-3 transition-all hover:ml-5"
                                src={ArrowIcon2}
                                alt=""
                            />
                        </Button>
                    ))}
            </div>
        </div>
    );
};
export default GameCard;
