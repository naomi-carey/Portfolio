import styled from "styled-components";

export const ProjectsContainer = styled.div`
  ${"" /* height: 825px; */}
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1000px;
  }

  @media screen and (max-width: 480px) {
    height: 1550px;
  }
`;

export const ProjectsWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 10px 0;

    @media screen and (max-width: 768px) {
      grid-template-columns: 1fr 1fr;
      padding: 0 20px;
    }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }
  }
`;

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;

  box-shadow: 0 1px 3px rgba(0.2);
  transistion: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transistion: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ProjectsIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

// export const ProjectsH1 = styled.h1`
//   font-size: 2.5rem;
//   color: #fff;
//   margin-bottom: 64px;

//   @media screen and (max-width: 480) {
//     font-size: 2rem;
//     margin-bottom: 4px;
//   }
// `;

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
