import React from "react";
import Journeyimg from "../assets/Mask Group 29.png";

const Journey = () => {
  return (
    <React.Fragment>
      <section>
        {/* 1 */}
        <div
          className="relative inline-block xs:h-[10rem] lg:h-auto"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="xs:h-[10rem] lg:h-auto object-none"
            src={Journeyimg}
            alt="ourjouneybanner"
          />
          <div className="whitespace-nowrap absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4 z-10 text-white text-center p-5">
            <h2 className="xs:text-base lg:text-4xl xl:text-6xl xl:leading-[5rem]">
              A JOURNEY
              <br /> THOUGH DECADES
            </h2>
          </div>
        </div>
        {/* 2 */}
        <div className="text-[#919191] my-12 lg:mx-[15rem] xs:mx-[2rem]">
          <h1 className="text-3xl text-center mb-8">OUR JOURNEY</h1>
          <p className="text-center">
            Image capitalized on the changing retail landscape of Pakistan and
            built stores across major cities in Pakistan that provide superior
            products both in terms of quality and design, with the value
            addition of selling ’Designer Clothing’ at affordable prices. Since
            its entry into the retail design industry in July 2015, Image has
            established itself as a high-quality fashion label in clothing in a
            short span of time.
          </p>
          <br />

          <p className="text-center">
            Commitment to excellence and creativity, has made Image one of the
            most acclaimed household names amongst fashion brands. Image also
            has a strong e-commerce presence, both nationally and
            internationally, and in 2021, Image became the first Pakistani
            seller to be officially listed on Amazon. Being included in the
            seller’s list enabled Image to gain access to more than 400 million
            consumers across the world.
          </p>
          <br />

          <p className="text-center">
            {" "}
            On 21st February, 2022 the Image received the Prime Minister’s
            Excellence Award for its outstanding performance in e-commerce, in a
            prestigious ceremony held by the Ministry of Commerce in Islamabad.
            The brand has shown resilience in unprecedented times and continues
            to enjoy a strong growth trajectory post the pandemic.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Journey;
