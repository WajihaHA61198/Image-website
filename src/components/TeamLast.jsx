import React from "react";
import buddy from "../assets/Buddy program.png";
import women from "../assets/Women's day.png";
import training from "../assets/Training Program.png";
import teamPic from "../assets/teamPic.png";

const TeamLast = () => {
  return (
    <React.Fragment>
      <section className="md:mx-5 xl:mx-40 md:mb-20 xs:my-10">
        {/* @1 */}
        <div className="grid md:grid-cols-2  xs:mx-4 md:mx-0">
          <img
            src={buddy}
            alt="buddy_program"
            data-aos="fade-right"
            // data-aos-offset="500"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
          />
          <div className="md:mx-4 lg:mx-10 flex flex-col justify-center xs:text-center md:text-left xs:my-5 md:my-0">
            <h1 className="md:text-xl lg:text-2xl mb-4 font-semibold xs:text-xl">
              Buddy Program
            </h1>
            <p className="text-[#919191] xs:text-sm md:text-sm lg:text-base">
              The Buddy Program is an onboarding initiative by Image. In this
              program, we onboard and welcome new recruits by partnering them
              with our seasoned employees to help them settle in and learn the
              ropes, both socially and professionally. With this initiative,
              Image not only helps them achieve their true potential but enables
              them to feel at home.
            </p>
          </div>
        </div>

        {/* @2 */}
        <div className="grid md:grid-cols-2 xs:mx-4 md:mx-0 xs:flex xs:flex-col-reverse md:grid">
          <div className="md:mx-4 lg:mx-10 flex flex-col justify-center xs:text-center md:text-left xs:my-5 md:my-0">
            <h1 className="md:text-xl lg:text-2xl mb-4 font-semibold xs:text-xl">
              Women’s Day
            </h1>
            <p className="text-[#919191] xs:text-sm md:text-sm lg:text-base">
              As a company that truly believes in female empowerment, Image
              leaves no stone unturned when it comes to empowering and
              celebrating women. Every year on International Women’s Day, we
              organize a series of events designed to arm women with the tools
              they need to succeed in life; professionally, economically,
              mentally, and socially – whilst also celebrating their
              contribution with exciting giveaways.
            </p>
          </div>
          <img
            src={women}
            alt="buddy_program"
            data-aos="fade-left" // data-aos-offset="500"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
          />
        </div>

        {/* @3 */}
        <div className="grid md:grid-cols-2 xs:mx-4 md:mx-0">
          <img
            // src={training}
            src={teamPic}
            alt="buddy_program"
            data-aos="fade-right" // data-aos-offset="500"
            data-aos-duration="900"
            data-aos-easing="ease-in-sine"
          />
          <div className="md:mx-4 lg:mx-10 flex flex-col justify-center xs:text-center md:text-left xs:my-5 md:my-0">
            <h1 className="md:text-xl lg:text-2xl mb-4 font-semibold xs:text-xl">
              Training Sessions
            </h1>
            <p className="text-[#919191] md:text-sm lg:text-base xs:text-sm">
              One of the best ways to enhance knowledge and skills is through
              training. Providing employees with relevant and consistent
              training can help improve performance and efficiency in the
              workplace. <br />
              <br /> We constantly invest in training our staff to make them
              more effective and efficient.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default TeamLast;
