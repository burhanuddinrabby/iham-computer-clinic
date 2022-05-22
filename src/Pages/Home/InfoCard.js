import React from 'react';
import arrows from '../../assets/images/arrows.gif';

const InfoCard = ({ img, cardTitle, bgClass }) => {
    return (
        <div
            className=""
            style={{
                backgroundImage: `url(${arrows})`,
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
            }}
        >
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid grid-cols-2 row-gap-8 gap-y-8 md:grid-cols-4">
                    <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
                            11B
                        </h6>
                        <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base animate-left">
                            Users
                        </p>
                    </div>
                    <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
                            9.2B{" "}
                        </h6>
                        <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base animate-right">
                            Humans
                        </p>
                    </div>
                    <div className="text-center border-b  pb-3 mx-2 md:border-b-0 md:mx-0  md:border-r">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
                            1.8B{" "}
                        </h6>
                        <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base animate-left">
                            Aliens
                        </p>
                    </div>
                    <div className="text-center border-b pb-3 mx-2 md:border-b-0 md:mx-0  ">
                        <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl text-slate-50">
                            88k
                        </h6>
                        <p className="text-sm font-medium tracking-widest text-gray-100 uppercase lg:text-base animate-right">
                            Sellers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;