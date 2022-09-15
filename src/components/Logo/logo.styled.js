import styled, { keyframes } from "styled-components";

const logoAnim = keyframes`
    to {
        stroke-dashoffset: 0%;
    }
`;
const logoFill = (props) => keyframes`
    to {
        fill: ${props.theme.color.primary};
    }
`;

export const StyledLogo = styled.div`
  display: grid;
  place-items: center;

  svg {
    height: 30px;
  }

  ${({ theme }) => theme.sizes.tablet} {
    svg {
      height: 35px;
    }
  }

  #logo-anim {
    fill: transparent;
    animation: ${(props) => logoFill(props)} 1s ease 4.2s forwards;
  }
  #logo-anim path:nth-child(1) {
    stroke-dasharray: 101;
    stroke-dashoffset: 101;
    animation: ${logoAnim} 3s ease 1s forwards;
  }
  #logo-anim path:nth-child(2) {
    stroke-dasharray: 77;
    stroke-dashoffset: 77;
    animation: ${logoAnim} 3s ease 1.3s forwards;
  }
  #logo-anim path:nth-child(3) {
    stroke-dasharray: 186;
    stroke-dashoffset: 186;
    animation: ${logoAnim} 3s ease 1.6s forwards;
  }
  #logo-anim path:nth-child(4) {
    stroke-dasharray: 152;
    stroke-dashoffset: 152;
    animation: ${logoAnim} 3s ease 1.9s forwards;
  }
  #logo-anim path:nth-child(5) {
    stroke-dasharray: 28;
    stroke-dashoffset: 28;
    animation: ${logoAnim} 3s ease 2s forwards;
  }
`;

export const Path = styled.path.attrs((props) => ({
  stroke: props.theme.color.primary,
  strokeWidth: "1.7",
}))``;
