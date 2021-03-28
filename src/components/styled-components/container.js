import styled from "@emotion/styled"

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  padding: 0px 15px;

  @media (min-width: 720px) {
    max-width: 600px;
  }
  @media (min-width: 1336px) {
    max-width: 1200px;
  }
`
export default Container
