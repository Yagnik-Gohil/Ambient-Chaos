import CircularSlider from "@fseehawer/react-circular-slider";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const Card = ({
  icon,
  name,
  audio,
}: {
  icon: string;
  name: string;
  audio: string;
}) => {
  const [value, changeValue] = useState(0);
  const [sliderSize, setSliderSize] = useState(200); // default
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Determine slider size on client
    const handleResize = () => {
      setSliderSize(window.innerWidth < 768 ? 140 : 200);
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      if (value > 2) {
        audioRef.current.volume = value / 100;
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [value]);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <Image
          width={100}
          height={100}
          src={icon}
          className="md:w-20 md:h-20 w-10 h-10 filter invert"
          alt={name}
          unoptimized
        />
        <p className="pt-1 text-green-400">{name}</p>
      </div>
      <CircularSlider
        max={100}
        labelColor="#FFF"
        knobColor="#166534"
        progressColorFrom="#86efac"
        progressColorTo="#16a34a"
        progressSize={sliderSize / 20} // adjust proportionally
        trackColor="#FFF"
        trackSize={sliderSize / 20}
        dataIndex={0}
        onChange={(val: number) => changeValue(val)}
        width={sliderSize}
        hideLabelValue={true}
        knobPosition={"bottom"}
      />
      {audio && <audio ref={audioRef} src={audio} loop />}
    </div>
  );
};

export default Card;
