import styled from "styled-components";

export const Wrapper = styled.footer`
  text-align: center;
  padding: 4rem 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1.2rem;
`;
export const Text = styled.p`
  font-size: 1.1rem;
  width: 400px;
  max-width: 90%;
`;
export const ListBox = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;
export const List = styled.li`
  display: grid;
  place-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.primary};
  &:hover {
    background: ${({ theme }) => theme.color.primary};
    svg {
      fill: ${({ theme }) => theme.color.light};
    }
  }

  a {
    height: 30px;
  }

  svg {
    fill: ${({ theme }) => theme.color.primary};
    width: 30px;
    height: 30px;
  }
`;
