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
  min-height: calc(100vh - 150px);
  width: 100%;
  display: flex;
  padding: 0 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  div {
    height: 300px;
  }
  @media screen and (max-width: 1440px) {
    flex-wrap: wrap;
    div {
      width: 46%;
      height: 450px;
    }
  }
  @media screen and (max-width: 960px) {
    div {
      height: 400px;
    }
  }
  @media screen and (max-width: 768px) {
    width: 95%;
    div {
      height: 360px;
    }
  }
  @media screen and (max-width: 650px) {
    div {
      width: 100%;
    }
  }
  @media screen and (max-width: 650px) {
    div {
      height: 250px;
    }
  }
  @media screen and (max-width: 375px) {
    div {
      height: 200px;
    }
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
  @media screen and (max-width: 768px) {
    padding: 24px;
  }
  @media screen and (max-width: 568px) {
    padding: 16px;
  }
`;
export const ProjectsIcon = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 8px;
  background-image: ${(p) => `url(${p.pic})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  /* background-size:contain; */
`;
export const ProjectsH1 = styled.h1`
  color: #009688;
  font-size: 16px;
  font-weight: 700;
  letter-space: 1.4px;
  text-transform: uppercase;
  user-select: none;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  padding-top: 100px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
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
