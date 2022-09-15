import styled from "styled-components";

export const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 1s ease;
  padding: 1rem 2rem;
  z-index: 10;
  background-color: ${({ theme }) => theme.color.light};
`;

export const Burger = styled.div`
  width: 25px;
  position: relative;
  cursor: pointer;
  border: ${({ open, theme }) => open || `1px solid ${theme.color.dark}`};
  z-index: 10;

  &::before {
    content: "";
    width: ${({ open }) => (open ? "100%" : "25%")};
    height: 2px;
    background: ${({ theme }) => theme.color.dark};
    position: absolute;
    top: 9px;
    left: 0;
    transform: ${({ open }) => open && "rotate(45deg) translate(-7px, -7px)"};
    transition: all 0.35s ease;
  }

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    background: ${({ theme }) => theme.color.dark};
    position: absolute;
    bottom: 9px;
    left: 0;
    transform: ${({ open }) => open && "rotate(-45deg) translate(-7px, 7px)"};
    transition: all 0.35s ease;
  }
`;
