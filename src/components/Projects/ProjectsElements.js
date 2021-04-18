import styled from "styled-components";
export const ProjectsContainer = styled.div`
  min-height: 100vh;
  padding-bottom: 36px;
  width: -webkit-fill-available;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;
export const ProjectsWrapper = styled.div`
  height: 100%;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr; */
  grid-auto-rows: 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 30px;
  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 300px;
  }
  @media screen and (max-width: 576px) {
    grid-auto-rows: 250px;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    grid-auto-rows: 70vw;
  }
  div > div > div > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const ProjectsCard = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  border-radius: 10px;
  padding: 45px;
  box-shadow: 0 1px 3px rgba(0.2);
  &:hover {
    cursor: pointer;
  }
`;
export const ProjectsIcon = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;
export const ProjectsH1 = styled.h1`
  color: #009688;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-space: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  margin-top: 90px;
  user-select: none;
`;
export const ProjectButton = styled.a`
  border-radius: 2px;
  outline: none;
  background: #fff;
  padding: 10px;
  margin-top: 5px;
  ${"" /* border: 1px solid #010101; */}
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  width: 200px;
  color: #009688;
  text-decoration: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #010101;
    color: #fff;
  }
`;
export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
  user-select: none;
`;
export const ProjectsP = styled.p`
  font-size: 1rem;
  text-align: center;
  user-select: none;
`;
export const EventWrapper = styled.div`
  width: 100%;
  height: 100%;
  div {
    ${"" /* pointer-events: none; */}
    width: 100%;
    height: 100%;
    div {
      width: 100%;
      height: 100%;
    }
  }
`;
