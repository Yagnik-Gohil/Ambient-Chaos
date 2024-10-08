import Card from "./Card";
import rainSvg from "./assets/svg/rain.svg";
import wavesSvg from "./assets/svg/waves.svg";
import musicSvg from "./assets/svg/music.svg";
import campfireSvg from "./assets/svg/campfire.svg";
import windSvg from "./assets/svg/wind.svg";
import forestSvg from "./assets/svg/forest.svg";
import playgroundSvg from "./assets/svg/playground.svg";
import circusSvg from "./assets/svg/circus.svg";
import casinoSvg from "./assets/svg/casino.svg";
import fireworkSvg from "./assets/svg/firework.svg";
import coffeeSvg from "./assets/svg/coffee.svg";
import highwaySvg from "./assets/svg/highway.svg";

import rainMp3 from "./assets/audio/rain.mp3";
import wavesMp3 from "./assets/audio/waves.mp3";
import lofiMp3 from "./assets/audio/lofi.mp3";
import campfireMp3 from "./assets/audio/campfire.mp3";
import windMp3 from "./assets/audio/wind.mp3";
import forestMp3 from "./assets/audio/forest.mp3";
import playgroundMp3 from "./assets/audio/playground.mp3";
import carnivalMp3 from "./assets/audio/carnival.mp3";
import casinoMp3 from "./assets/audio/casino.mp3";
import fireworksMp3 from "./assets/audio/fireworks.mp3";
import coffeeMp3 from "./assets/audio/coffee.mp3";
import highwayMp3 from "./assets/audio/highway.mp3";

import auroraVideo from "./assets/aurora.mp4";
import music1Svg from "./assets/svg/music-1.svg";
import music2Svg from "./assets/svg/music-2.svg";
import music3Svg from "./assets/svg/music-3.svg";

import { useState } from "react";

function App() {
  const [hasInteracted, setHasInteracted] = useState(false);

  // Function to handle user interaction, hides the popup
  const handleInteraction = () => {
    setHasInteracted(true); // Hide the popup after interaction
  };

  return (
    <div
      className="relative h-[100%] bg-black text-white flex flex-col p-4 items-center"
      onClick={handleInteraction}
    >
      <video
        className="fixed inset-0 top-0 h-full w-full object-cover"
        src={auroraVideo}
        autoPlay
        loop
        muted
      />
      <div className="my-5 select-none sm:my-10 text-center z-[1]">
        <p className="text-4xl sm:text-6xl yeseva-one-regular">AMBIENT</p>
        <p className="text-6xl sm:text-8xl protest-strike-regular text-cyan-400">
          CHAOS
        </p>
      </div>
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={rainSvg} name={"Rain"} audio={rainMp3} />
        <Card icon={wavesSvg} name={"Waves"} audio={wavesMp3} />
        <Card icon={musicSvg} name={"Lo-fi Beats"} audio={lofiMp3} />
        <Card icon={campfireSvg} name={"Campfire"} audio={campfireMp3} />
        <Card icon={windSvg} name={"Wind"} audio={windMp3} />
        <Card icon={forestSvg} name={"Forest"} audio={forestMp3} />
        <Card icon={playgroundSvg} name={"Playground"} audio={playgroundMp3} />
        <Card icon={circusSvg} name={"Circus"} audio={carnivalMp3} />
        <Card icon={casinoSvg} name={"Casino"} audio={casinoMp3} />
        <Card icon={fireworkSvg} name={"Firework"} audio={fireworksMp3} />
        <Card icon={coffeeSvg} name={"Coffee Shop"} audio={coffeeMp3} />
        <Card icon={highwaySvg} name={"Highway"} audio={highwayMp3} />
      </div>

      {!hasInteracted && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="popup-container bg-home-gradient text-white p-6 rounded-xl shadow-lg text-center animate-fade-in">
            <div className="flex justify-center">
              <img
                src={music1Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-1"
              />
              <img
                src={music2Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-2"
              />
              <img
                src={music3Svg}
                alt="Music Icon"
                className="w-16 h-16 mb-4 animate-bounce-alternate-1"
              />
            </div>
            <p className="text-2xl font-bold protest-strike-regular">Elevate the volume!</p>
            <p className="text-lg mt-2 font-bold">
              "Rain" and "Lo-fi Beats" are pure bliss.
              <br />
              For the best experience, use headphones!
            </p>
            <button
              onClick={handleInteraction}
              className="mt-6 bg-cyan-900 hover:bg-cyan-800 px-6 py-2 rounded-lg font-semibold transition duration-300"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
