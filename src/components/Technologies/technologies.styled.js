import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  box-shadow: 1px 2px 4px 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  border-radius: 10px;
  margin: 0 auto;
  background: ${({ theme }) => theme.color.light};
  width: 800px;
  max-width: 95%;
  padding: 2rem 0;
  gap: 2rem;

  ${({ theme }) => theme.sizes.tablet} {
    flex-direction: row;
    padding: 4rem 0;
    gap: 0rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  text-align: center;
  gap: 1rem;

  ${({ theme }) => theme.sizes.tablet} {
    &:first-child {
      border-right: 1px solid rgba(0, 0, 0, 0.15);
    }
    width: 50%;
    padding: 0 2rem;
  }
`;

export const Vector = styled.img`
  width: 70%;
`;
export const Title = styled.h3`
  font-size: 1.5rem;
`;
export const SubTitle = styled.h4`
  color: ${({ theme }) => theme.color.primary};
`;
export const Desc = styled.p`
  margin-bottom: 1rem;
  height: 4.5rem;
`;
export const Image = styled.img`
  width: 60px;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  width: 100%;
  gap: 2rem;
  padding: 1rem;

  li {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
