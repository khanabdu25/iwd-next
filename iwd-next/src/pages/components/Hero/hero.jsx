import React, { useState } from "react";
import globeGIF from "../../assets/hero/globe.gif";
import heroGirl from "../../assets/hero/women-hero.png";
import background from "../../assets/hero/hero-background.PNG";
import date from "../../assets/hero/rocket-2.jpeg";
import mobilebg from "../../assets/hero/mobile-hero-asset.PNG";
import dateAnimation from "../../assets/hero/date-animation.gif";
import Image from "next/image";

function Hero() {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
    setTimeout(() => {
      // this will delay opening the link for a little , so button click effect can show
      window.open(
        "https://docs.google.com/forms/d/e/1FAIpQLSeXEqlXIG1UCwjMS_mUEa6H_e3VxvqqDmpUmP-MJSTp4cJrtQ/viewform",
        "_blank"
      );
    }, 500);
  };

  return (
    <div
      id="hero-section"
      class="app-section hero-banner"
      style={{ marginTop: "55px" }}
    >
      {" "}
      {/* marginTop offsets by exactly the height of Nav */}
      {/* The main responsive container */}
      <div class="flex flex-col my-5 md:flex-row md:my-0 lg:relative md: py-5 lg:py-0 xl:py-0">
        {/* background */}
        <div class="w-0 lg:w-2/3 lg:h-auto lg:self-start">
          <Image id="background-Image" src={background} alt=""></Image>
        </div>
        {/* foreground */}
        <div class="flex flex-col items-center md:flex-row md:p-2 lg:pl-woman lg:pr-5 md:justify-center lg:absolute lg:ml-{4rem}">
          {/* woman */}
          <div class="w-4/5 md:1/2 lg:w-2/6">
            <Image class="w-full h-full" src={heroGirl} alt=""></Image>
          </div>
          {/* text & button */}
          <div class=" md:1/2 lg:w-2/6 lg:py-2 sm:py-3/4 sm:w-auto px-10 md:px-0 ">
            <div className="heading-div w-full">
              <h1 className="text-[10vw] sm:text-[5vw] md:text-[6vw] xl:text-[4.5vw] lg:text-[4.5vw] leading-customh1">
                Impact <br /> The Future
              </h1>
              <Image id="globe-gif" src={globeGIF} alt=""></Image>
            </div>
            <h2 className="font-medium pb-3 text-custom-purple text-[3.4vw] sm:text-[5vw] sm:font-medium sm:pb-0	 md:text-[2.5vw] lg:text-[2vw] lg:leading-customh1 ">
              Detroit International Women&apos;s Day Summit 2024
            </h2>
            <p>
              Celebrate International Women&apos;s Day with us at a vibrant
              summit on March 30th in Detroit, hosted at the DTE Headquarters.
              Inspire, empower, and connect with women in tech.
            </p>
            <button className="btn tickets-btn" onClick={handleClick}>
              rsvp now
            </button>
          </div>
        </div>
        {/* also background */}
        <div class="flex flex-col justify-end w-0 lg:w-1/3 pb-10">
          {/* <Image className="h-36 w-full" src={dateAnimation}></Image> */}
          <Image className="h-auto w-full" src={date} alt=""></Image>
        </div>
      </div>
    </div>
  );
}

export default Hero;
