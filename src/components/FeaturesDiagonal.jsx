import { motion } from "framer-motion";
import { useState } from "react";

import configurator from "../assets/images/configurator.gif";

export const FeaturesDiagonal = () => {
    return (
        <section className="lg:mb-16 w-full flex flex-col justify-center items-center bg-customDarkBg1">
            <div className="custom-shape-divider-bottom-1665696614">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="custom-bg-dark2"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="custom-bg-dark1"
                    ></path>
                </svg>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col">
                    <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
                        <span className="custom-block-subtitle">
                            Experimental Feature
                        </span>
                        <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                            Run qsv commands with our qsv Configurator GUI
                        </h2>
                        <p className="mb-16 text-customGrayText leading-loose">
                            No need to run qsv commands in your terminal. Try
                            out our experimental qsv Configurator GUI to use qsv
                            commands with a graphical user interface.
                        </p>
                    </div>
                    <div className="w-4/5 lg:w-2/3 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                        <img
                            src={configurator}
                            alt="Configurator Demo"
                            className="rounded-xl custom-border-gray"
                        />
                    </div>
                </div>
            </motion.div>
            <div className="custom-shape-divider-top-1665696661 w-full">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                    className="custom-bg-dark2"
                >
                    <path
                        d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
                        className="custom-bg-dark1"
                    ></path>
                </svg>
            </div>
        </section>
    );
};
