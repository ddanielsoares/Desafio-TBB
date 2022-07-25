import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 90vw;
  overflow: overlay;
  @media screen and (min-width: 768px) {
    width: 940px;
    flex-wrap: wrap;
  }
`;
