import { Container, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";
import Displaylist from "../features/display/DisplayList";

const HomePage = () => {
  return (
  <Container>
    <Row>
      <SubHeader />
      <Displaylist />
    </Row>
  </Container>);
};

export default HomePage;