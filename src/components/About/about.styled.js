import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  color: ${({ theme }) => theme.color.light};
  margin-top: 3rem;
  padding: 3rem 0.5rem;
  text-align: center;

  ${({ theme }) => theme.sizes.tablet} {
    margin-top: 6rem;
  }
`;

export const Clip = styled.div`
  position: absolute;
  top: -200px;
  left: -6%;
  height: calc(100% + 300px);
  width: 100vw;
  z-index: -1;
  border-top: 100px solid transparent;
  border-left: 100vw solid ${({ theme }) => theme.color.peach};
`;

export const Title = styled.h4`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const Desc = styled.p`
  width: 600px;
  max-width: 95%;
  margin: 0 auto;
  font-size: 1.2rem;
`;
