import styled from "styled-components";

export const Wrapper = styled.section`
  position: relative;
  color: ${({ theme }) => theme.color.light};
  padding-top: 5rem;
  padding-bottom: 5rem;

  ${({ theme }) => theme.sizes.tablet} {
    padding-top: 7rem;
  }
`;

export const Clip = styled.div`
  position: absolute;
  top: -200px;
  left: -6%;
  height: 750px;
  width: 100vw;
  z-index: -1;
  border-top: 100px solid transparent;
  border-right: 100vw solid ${({ theme }) => theme.color.green};
  border-bottom: 100px solid transparent;
  border-right: 100vw solid ${({ theme }) => theme.color.green};
`;

export const Box = styled.div`
  text-align: center;
  margin: 0 auto 3rem;
  width: 600px;
  max-width: 90%;
`;
export const Title = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const Desc = styled.p`
  font-size: 1.2rem;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 950px;
  max-width: 90%;
  gap: 2rem;
  margin: 0 auto;

  ${({ theme }) => theme.sizes.tablet} {
    grid-template-columns: 1fr 1fr;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const Card = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 1px 2px 3px 2px rgba(0, 0, 0, 0.15);

  &:hover {
    .card-details {
      opacity: 1;
    }
  }
`;
export const CardDetails = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(2px);
  display: flex;
  opacity: 0;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem 1rem;
  align-items: center;
  justify-content: center;
  transition: all 0.35s ease-in;
  font-size: 0.87rem;

  ${({ theme }) => theme.sizes.tablet} {
    font-size: 1rem;
  }
`;
export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.sizes.tablet} {
    gap: 0.5rem;
    font-size: 1rem;
    h5 {
      margin-bottom: 1rem;
    }
  }

  h5 {
    margin-bottom: 0.35rem;
    font-size: 1.1em;
    letter-spacing: 1.5px;
    font-weight: 600;
  }

  strong {
    font-weight: 500;
    font-size: 1em;
  }

  p {
    font-size: 0.9em;
    width: 90%;
  }
`;
export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.2em;
  color: ${({ theme }) => theme.color.light};
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.color.green};
  transition: all 0.25s ease-in-out;
  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.color.green};
  }

  ${({ theme }) => theme.sizes.tablet} {
    padding: 1rem 1.5rem;
  }
`;
