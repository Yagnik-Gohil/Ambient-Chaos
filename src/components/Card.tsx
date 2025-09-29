import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface CardProps {
  icon: string;
  name: string;
  audio: string;
}

const Card = ({ icon, name, audio }: CardProps) => {
  const [value, setValue] = useState(0); // 0-100
  const [dragging, setDragging] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const size = 200; // SVG width/height
  const strokeWidth = 16;
  const knobDiameter = 28; // bigger than stroke
  const radius = (size - strokeWidth) / 2;
  const center = size / 2;

  // Convert value (0-100) to angle in radians, start at bottom
  const valueToAngle = (val: number) => (val / 100) * 2 * Math.PI + Math.PI / 2;

  const angleToValue = (angle: number) => {
    let val = ((angle - Math.PI / 2) / (2 * Math.PI)) * 100;
    if (val < 0) val += 100;
    if (val > 100) val -= 100;
    return val;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragging || !svgRef.current) return;
    const rect = svgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - center;
    const y = e.clientY - rect.top - center;
    const angle = Math.atan2(y, x);
    const val = angleToValue(angle);
    setValue(val);
  };

  const handleMouseUp = () => setDragging(false);

  useEffect(() => {
    if (dragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [dragging]);

  // Play/pause audio
  useEffect(() => {
    if (!audioRef.current) return;
    if (value > 2) {
      audioRef.current.volume = value / 100;
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [value]);

  // Knob position
  const angle = valueToAngle(value);
  const knobX = center + radius * Math.cos(angle);
  const knobY = center + radius * Math.sin(angle);

  // SVG circle circumference
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="relative w-[220px] h-[220px] flex items-center justify-center select-none">
      {/* Icon & Name */}
      <div className="absolute flex flex-col items-center justify-center">
        <Image
          src={icon}
          alt={name}
          width={64}
          height={64}
          unoptimized
          className="filter invert"
        />
        <p className="pt-1 text-green-400 text-base">{name}</p>
      </div>

      {/* Circular Slider */}
      <svg
        ref={svgRef}
        width={size}
        height={size}
        style={{ overflow: "visible" }}
      >
        {/* Background Track */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="#fff"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke="url(#gradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          transform={`rotate(90 ${center} ${center})`} // rotate so progress starts at bottom
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Knob (rendered last so it's on top) */}
        <circle
          cx={knobX}
          cy={knobY}
          r={knobDiameter / 2}
          fill="#166534"
          className="cursor-pointer"
          onMouseDown={() => setDragging(true)}
        />
        {/* Knob "burger" icon */}
        <text
          x={knobX}
          y={knobY + 2} // center vertically
          textAnchor="middle"
          fontSize="12"
          fill="#fff"
          fontWeight="bold"
        >
          ≡
        </text>
      </svg>

      {/* Audio */}
      {audio && <audio ref={audioRef} src={audio} loop />}
    </div>
  );
};

export default Card;
