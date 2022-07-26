import styled from "styled-components";

export const SectionWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 960px;
  margin: 0 auto;
  margin-bottom: 100px;
  padding: 0 20px;
  overflow: hidden;
`;
