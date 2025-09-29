"use client";

const rainSvg = "/svg/rain.svg";
const wavesSvg = "/svg/waves.svg";
const musicSvg = "/svg/music.svg";
const campfireSvg = "/svg/campfire.svg";
const windSvg = "/svg/wind.svg";
const forestSvg = "/svg/forest.svg";
const playgroundSvg = "/svg/playground.svg";
const circusSvg = "/svg/circus.svg";
const casinoSvg = "/svg/casino.svg";
const fireworkSvg = "/svg/firework.svg";
const coffeeSvg = "/svg/coffee.svg";
const highwaySvg = "/svg/highway.svg";
const githubSvg = "/svg/github.svg";

const pianoSvg = "/svg/piano.svg";
const acousticSvg = "/svg/acoustic-guitar.svg";
const spanishSvg = "/svg/spanish-guitar.svg";
const violinSvg = "/svg/violin.svg";
const fluteSvg = "/svg/flute.svg";
const drummerSetSvg = "/svg/drummer-set.svg";

const rainMp3 = "/audio/rain.mp3";
const wavesMp3 = "/audio/waves.mp3";
const lofiMp3 = "/audio/lofi.mp3";
const campfireMp3 = "/audio/campfire.mp3";
const windMp3 = "/audio/wind.mp3";
const forestMp3 = "/audio/forest.mp3";

const playgroundMp3 = "/audio/playground.mp3";
const carnivalMp3 = "/audio/carnival.mp3";
const casinoMp3 = "/audio/casino.mp3";
const fireworksMp3 = "/audio/fireworks.mp3";
const coffeeMp3 = "/audio/coffee.mp3";
const highwayMp3 = "/audio/highway.mp3";

const beethovenMp3 = "/audio/beethoven.mp3";
const guitarMp3 = "/audio/guitar-summer-walk.mp3";
const spanishMp3 = "/audio/spanish-the-lively-dancer.mp3";
const violinMp3 = "/audio/bach-violin-concerto-in-a-minor-3-movement.mp3";
const fluteMp3 = "/audio/indian-flute.mp3";
const drumsMp3 = "/audio/drums.mp3";

const bg = "/bg.png";
const music1Svg = "/svg/music-1.svg";
const music2Svg = "/svg/music-2.svg";
const music3Svg = "/svg/music-3.svg";

import { useState } from "react";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Image from "next/image";

export default function App() {
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
      <Image
        className="fixed inset-0 top-0 h-full w-full object-cover"
        src={bg}
        alt="Background Image"
        width={100}
        height={100}
        unoptimized
      />
      <div className="my-5 select-none sm:my-8 text-center z-[1]">
        <p className="text-5xl sm:text-6xl yeseva-one-regular">AMBIENT</p>
        <p className="text-8xl sm:text-9xl protest-strike-regular text-green-400">
          CHAOS
        </p>
      </div>
      <Title title="NATURE" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={rainSvg} name={"Rain"} audio={rainMp3} />
        <Card icon={musicSvg} name={"Lo-fi Beats"} audio={lofiMp3} />
        <Card icon={wavesSvg} name={"Waves"} audio={wavesMp3} />
        <Card icon={campfireSvg} name={"Campfire"} audio={campfireMp3} />
        <Card icon={windSvg} name={"Wind"} audio={windMp3} />
        <Card icon={forestSvg} name={"Forest"} audio={forestMp3} />
      </div>
      <Title title="MUSIC INSTRUMENTS" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={pianoSvg} name={"Piano"} audio={beethovenMp3} />
        <Card icon={acousticSvg} name={"Acoustic Guitar"} audio={guitarMp3} />
        <Card icon={spanishSvg} name={"Spanish Guitar"} audio={spanishMp3} />
        <Card icon={violinSvg} name={"Violin"} audio={violinMp3} />
        <Card icon={fluteSvg} name={"Flute"} audio={fluteMp3} />
        <Card icon={drummerSetSvg} name={"Drums"} audio={drumsMp3} />
      </div>
      <Title title="OTHER" />
      <div className="grid grid-cols-2 gap-10 sm:my-10 sm:grid-cols-3 sm:gap-30 md:gap-24 protest-strike-regular">
        <Card icon={playgroundSvg} name={"Playground"} audio={playgroundMp3} />
        <Card icon={circusSvg} name={"Circus"} audio={carnivalMp3} />
        <Card icon={casinoSvg} name={"Casino"} audio={casinoMp3} />
        <Card icon={fireworkSvg} name={"Firework"} audio={fireworksMp3} />
        <Card icon={coffeeSvg} name={"Coffee Shop"} audio={coffeeMp3} />
        <Card icon={highwaySvg} name={"Highway"} audio={highwayMp3} />
      </div>

      {!hasInteracted && (
  <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="popup-container bg-gradient-to-tr from-green-800 via-green-600 to-green-400 bg-opacity-80 backdrop-blur-md rounded-3xl shadow-[0_0_50px_rgba(0,255,128,0.5)] text-white p-8 text-center animate-fade-in scale-90 hover:scale-100 transition-transform duration-500">
      {/* Floating Icons */}
      <div className="flex justify-center space-x-4 mb-4">
        <Image
          width={100}
          height={100}
          src={music1Svg}
          alt="Music Icon"
          className="w-16 h-16 animate-bounce-slow"
          unoptimized
        />
        <Image
          width={100}
          height={100}
          src={music2Svg}
          alt="Music Icon"
          className="w-16 h-16 animate-bounce-slower"
          unoptimized
        />
        <Image
          width={100}
          height={100}
          src={music3Svg}
          alt="Music Icon"
          className="w-16 h-16 animate-bounce-slow"
          unoptimized
        />
      </div>

      {/* Titles */}
      <p className="text-3xl sm:text-4xl font-bold protest-strike-regular mb-2 animate-pulse text-green-300">
        Elevate the volume!
      </p>
      <p className="text-lg sm:text-xl font-semibold">
        &quot;Rain&quot; and &quot;Lo-fi Beats&quot; are pure bliss.
        <br />
        For the best experience, use headphones!
      </p>

      {/* Button */}
      <button
        onClick={handleInteraction}
        className="mt-6 bg-green-900 hover:bg-green-800 px-6 py-3 rounded-xl font-semibold text-lg shadow-lg shadow-green-500/50 hover:shadow-green-400/70 transition-all duration-300 animate-pulse"
      >
        Got it!
      </button>
    </div>
  </div>
)}


      <div className="z-[1] py-10">
        <a href="https://github.com/Yagnik-Gohil/Ambient-Chaos" target="_blank">
          <Image
            width={100}
            height={100}
            src={githubSvg}
            alt="Github Icon"
            className="w-16 h-16 mb-4 filter invert"
            unoptimized
          />
        </a>
      </div>
    </div>
  );
}
