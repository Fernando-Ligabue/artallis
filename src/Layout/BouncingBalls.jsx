/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

const colors = [
  "#cc66994D",
  "#bbce004D",
  "#03abe54D",
  "#198ece4D",
  "#79ccf34D",
  "#f2921a4D",
  "#fccd004D",
];

const getRandomValue = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const getRandomPosition = () => {
  const positions = ['top-left', 'bottom-left', 'top-right', 'bottom-right'];
  const randomIndex = Math.floor(Math.random() * positions.length);
  return positions[randomIndex];
};

const Ball = ({ size, color }) => {
  const position = getRandomPosition();

  let top, left;
  switch (position) {
    case 'top-left':
      top = `${getRandomValue((2 * Math.random()), 30)}vh`;
      left = `${getRandomValue((47 * Math.random()), 30)}vw`;
      break;
    case 'bottom-left':
      top = `${getRandomValue((70 * Math.random()), 90)}vh`;
      left = `${getRandomValue((14 * Math.random()), 30)}vw`;
      break;
    case 'top-right':
      top = `${getRandomValue((8 * Math.random()), 30)}vh`;
      left = `${getRandomValue((70 * Math.random()), 95)}vw`;
      break;
    case 'bottom-right':
      top = `${getRandomValue((54 * Math.random()), 90)}vh`;
      left = `${getRandomValue((70 * Math.random()), 95)}vw`;
      break;
    default:
      top = `${getRandomValue(26, 80)}vh`;
      left = `${getRandomValue(64, 80)}vw`;
  }

  const positionStyle = {
    width: `${size}px`,
    height: `${size}px`,
    backgroundColor: color,
    top: top,
    left: left,
    animationDelay: `${getRandomValue(0, 1)}s`,
  };

  return <div className="absolute rounded-full pointer-events-none animateBalls" style={positionStyle}></div>;
};

const BouncingBalls = () => {
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const newBalls = [];
    for (let i = 0; i < 32; i++) {
      const size = getRandomValue(25, 120);
      const color = getRandomColor();
      newBalls.push({ size, color });
    }
    setBalls(newBalls);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-screen overflow-hidden">
      {balls.map((ball, index) => (
        <Ball key={index} size={ball.size} color={ball.color} />
      ))}
    </div>
  );
};

export default BouncingBalls;
