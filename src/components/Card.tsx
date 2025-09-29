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
  const [size, setSize] = useState(200);
  const [strokeWidth, setStrokeWidth] = useState(16);
  const [knobDiameter, setKnobDiameter] = useState(28);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const svgRef = useRef<SVGSVGElement | null>(null);

  // Responsive sizing
  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 640) {
        setSize(140);
        setStrokeWidth(10);
        setKnobDiameter(22);
      } else if (window.innerWidth < 1024) {
        setSize(180);
        setStrokeWidth(14);
        setKnobDiameter(24);
      } else {
        setSize(220);
        setStrokeWidth(16);
        setKnobDiameter(28);
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const center = size / 2;
  const radius = (size - strokeWidth) / 2;

  // Value ↔ angle conversion (start at bottom)
  const valueToAngle = (val: number) => (val / 100) * 2 * Math.PI + Math.PI / 2;
  const angleToValue = (angle: number) => {
    let val = ((angle - Math.PI / 2) / (2 * Math.PI)) * 100;
    if (val < 0) val += 100;
    if (val > 100) val -= 100;
    return val;
  };

  // Mouse drag
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

  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center select-none w-full max-w-[250px] mx-auto">
      {/* Icon & Name */}
      <div className="absolute flex flex-col items-center justify-center z-[1]">
        <Image
          src={icon}
          alt={name}
          width={64}
          height={64}
          unoptimized
          className="filter invert"
        />
        <p className="pt-1 text-green-400 text-base sm:text-sm">{name}</p>
      </div>

      {/* Circular Slider */}
      <svg
        ref={svgRef}
        width={size}
        height={size}
        style={{ overflow: "visible", display: "block", margin: "0 auto" }}
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
          transform={`rotate(90 ${center} ${center})`} // start at bottom
        />

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Knob hit area */}
        <circle
          cx={knobX}
          cy={knobY}
          r={knobDiameter}
          fill="transparent"
          className={`cursor-grab ${dragging ? "cursor-grabbing" : ""}`}
          onMouseDown={() => setDragging(true)}
        />

        {/* Visible knob */}
        <circle
          cx={knobX}
          cy={knobY}
          r={knobDiameter / 2}
          fill="#166534"
          pointerEvents="none"
        />

        {/* Knob dot */}
        <circle
          cx={knobX}
          cy={knobY}
          r={knobDiameter / 6} // small dot
          fill="#fff"
          pointerEvents="none"
        />
      </svg>

      {/* Audio */}
      {audio && <audio ref={audioRef} src={audio} loop />}
    </div>
  );
};

export default Card;
