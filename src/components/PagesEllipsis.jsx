import styled, { keyframes } from "styled-components";

const pulseAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const theEllipsis = styled.div`
  display: inline-block;
  cursor: pointer;
  animation: ${pulseAnimation} 2s infinite;
`;

const PagesEllipsis = () => {
  return <PulsingEllipsis>&#8230;</PulsingEllipsis>;
};

export default PagesEllipsis;
