import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 6rem;
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0% 100% 0% 100% / 0% 0% 100% 100%;
  background: rgb(30, 144, 255);
  width: 300px;
  height: 300px;
  gap: 1.5rem;
  transform: ${({ open }) => (open ? "scale(100%)" : "scale(0%)")};
  transition: transform 0.25s ease;
  transform-origin: right top;

  ${({ theme }) => theme.sizes.tablet} {
    gap: 1.5rem;
    flex-direction: row;
    position: relative;
    width: auto;
    height: auto;
    border-radius: none;
    background: none;
    transform: none;
    transition: none;
    padding: 0;
  }
`;

export const Link = styled.a`
  font-weight: 500;
  color: ${({ theme }) => theme.color.light};

  ${({ theme }) => theme.sizes.tablet} {
    color: ${({ theme }) => theme.color.dark};
  }
`;

export const Button = styled.a`
  color: ${({ theme }) => theme.color.light};
  background: ${({ theme }) => theme.color.accent};
  border-radius: 3px;
  padding: 0.5rem 0.75rem;
`;
