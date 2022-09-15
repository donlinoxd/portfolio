import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 4rem 1rem;
  position: relative;
`;

export const Clip = styled.div`
  position: absolute;
  left: -6%;
  top: 0;
  width: 100vw;
  height: 100%;
  z-index: -1;
  background: ${({ theme }) => theme.color.primary};
`;
export const Image = styled.img`
  width: 450px;
  max-width: 90%;
  display: none;
  object-fit: contain;

  ${({ theme }) => theme.sizes.tablet} {
    display: block;
  }
`;
export const Form = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  background-color: ${({ theme }) => theme.color.light};
  border-radius: 5px;
  box-shadow: 1px 2px 3px 3px rgba(0, 0, 0, 0.1);
  align-items: center;
  text-align: center;
  width: 450px;
  padding: 2rem;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  padding: 0 1rem;

  input {
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.8rem;
  }
  textarea {
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.1);
    padding: 0.8rem;
  }
`;
export const Title = styled.h3`
  letter-spacing: 1.5px;
  font-size: 1.4rem;
  font-weight: 500;
`;
export const Button = styled.button`
  padding: 0.8rem 1.2rem;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.color.primary};
  transition: all 0.25s ease-in-out;
  background: transparent;
  &:hover {
    background: ${({ theme }) => theme.color.primary};
    color: ${({ theme }) => theme.color.light};
  }

  ${({ theme }) => theme.sizes.tablet} {
    padding: 1rem 1.5rem;
  }
`;
