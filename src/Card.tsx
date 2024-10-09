import CircularSlider from "@fseehawer/react-circular-slider";
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
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // If audio exists, play or pause based on value
    if (audioRef.current) {
      if (value > 2) {
        audioRef.current.volume = value / 100; // Adjust volume based on slider value
        audioRef.current.play();
      } else {
        audioRef.current.pause(); // Pause if value is 0
      }
    }
  }, [value]);

  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <img
          src={icon}
          className="md:w-20 md:h-20 w-10 h-10 filter invert"
          alt={name}
        />
        <p className="pt-1 text-green-400">{name}</p>
      </div>
      <CircularSlider
        max={100}
        labelColor="#FFF"
        knobColor="#166534"
        progressColorFrom="#86efac"
        progressColorTo="#16a34a"
        progressSize={window.innerWidth < 768 ? 6 : 16}
        trackColor="#FFF"
        trackSize={window.innerWidth < 768 ? 6 : 16}
        dataIndex={0}
        onChange={(val: number) => changeValue(val)}
        width={window.innerWidth < 768 ? 140 : 200}
        hideLabelValue={true}
        knobPosition={"bottom"}
      />
      {audio && <audio ref={audioRef} src={audio} loop />}
    </div>
  );
};

export default Card;
