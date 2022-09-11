import "./App.css";
import Counter from "./components/Counter";
import IncreaseCounter from "./components/IncreaseCounter";
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div>
      <Container>
        <Row>
          <Col className="roomfac" xs="12">
            <Counter></Counter>
          </Col>
          <Col className="container">
            <IncreaseCounter></IncreaseCounter>
            <DecreaseCounter></DecreaseCounter>
            <IncreaseByTwoCounter></IncreaseByTwoCounter>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
