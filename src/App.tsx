import "./styles.css";
import styled from "styled-components";

const Header = styled.h1`
  font-family: "Dancing Script", cursive;
  font-size: 48px;
  color: goldenrod;
`;

const OuterContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  padding: 32px;
  background-color: #f8f8f8;
  width: 100%;
  min-height: 100vh;
  max-width: 1200px;

  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;

  margin: 32px;

  grid-template-areas:
    "a a b d"
    "a a c e";

  grid-template-columns: repeat(4, 1fr);
`;

const Grid2 = styled(Grid)`
  grid-template-areas:
    "b d a a"
    "c e a a";
`;

const GridItem = styled.div<{ gridArea: string }>`
  grid-area: ${(p) => p.gridArea};
  background-color: white;
  aspect-ratio: calc(1);
  padding: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 4px 5px 5px #3333;

  cursor: pointer;

  transition: 200ms;
  &:hover {
    filter: brightness(1.05);
    transform: scale(1.03);
  }
`;

const Img = styled.img`
  object-fit: contain;
  max-height: 100%;
  max-width: 100%;
`;

export default function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"
        rel="stylesheet"
      />
      <OuterContainer>
        <Container>
          <Header>lovely</Header>
          <Grid>
            <GridItem gridArea="a" style={{ padding: 16 }}>
              <Img src="https://www.wrendaledesigns.co.uk/static/version1674577052/frontend/Wrendale/default/en_GB/images/logo.svg" />
            </GridItem>
            <GridItem gridArea="b">
              <Img src="/Untitled 3.png" />
            </GridItem>
            <GridItem gridArea="c">
              <Img src="/Untitled 3.png" />
            </GridItem>
            <GridItem gridArea="d">
              <Img src="/Untitled 3.png" />
            </GridItem>
            <GridItem gridArea="e">
              <Img src="/Untitled 3.png" />
            </GridItem>
          </Grid>
          <Grid2>
            <GridItem gridArea="a" style={{ padding: 16 }}>
              <Img src="https://cdn.shopify.com/s/files/1/0357/5673/files/shopify-logo-400px_34453ecc-abb3-4de9-959f-6f050516ab00_x260.png?v=1613163774" />
            </GridItem>
            <GridItem gridArea="b">
              <Img src="/Untitled 4.png" />
            </GridItem>
            <GridItem gridArea="c">
              <Img src="/Untitled 4.png" />
            </GridItem>
            <GridItem gridArea="d">
              <Img src="/Untitled 4.png" />
            </GridItem>
            <GridItem gridArea="e">
              <Img src="/Untitled 4.png" />
            </GridItem>
          </Grid2>
        </Container>
      </OuterContainer>
    </div>
  );
}
