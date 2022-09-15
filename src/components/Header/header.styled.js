import styled from "styled-components";

export const Box = styled.div`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

export const Wrapper = styled.header`
  display: flex;
  gap: 3rem;
  position: absolute;
  width: 190vw;
  height: 100vh;
  top: 0;
  left: 0;

  ${({ theme }) => theme.sizes.tablet} {
    width: 90vw;
  }
`;

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  padding-top: 7.5rem;
  z-index: 1;

  ${({ theme }) => theme.sizes.tablet} {
    opacity: 30%;
    cursor: crosshair;
    transition: opacity 0.2s ease;
    &:hover {
      opacity: 1;
    }
  }
`;

export const Title = styled.h3`
  font-family: "Sigmar One";
  font-size: 2rem;

  ${({ theme }) => theme.sizes.tablet} {
    font-size: 3rem;
  }
`;

export const Sub = styled.p`
  max-width: 300px;
  text-align: center;
  color: ${({ theme }) => theme.color.accent};
`;
