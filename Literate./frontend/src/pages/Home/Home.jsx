import React, { useContext } from "react";
import {
  Button,
  Container,
  Row,
  Text,
  Spacer,
  Link,
  Card,
  Col,
} from "@nextui-org/react";
import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import { AuthorizeContext } from "../../contexts/authUser";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

import { BudgetContext } from "../../contexts/budget";
ChartJS.register(ArcElement, Tooltip, Legend);
export const Home = ({ handleToggle, isOpen }) => {
  const { logoutUser } = useContext(AuthorizeContext);
  const navigate = useNavigate();
  const { budgetInfo, setBudgetInfo } = useContext(BudgetContext);
  const { authState } = useContext(AuthorizeContext);
  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };
  return (
    <div>
      <Container>
        <Row align="center">
          <Container>
            <Col>
              <Text size={36} h1>
                We've got what you need.
              </Text>

              <Text size={30} h2>
                Budget beginner? No problem, we've made it simple just for you!
              </Text>
              <Card css={{ width: 800 }}>
                <Card.Body>
                  <Container>
                    <Row>
                      <img
                        className="clipboard"
                        src="https://static.vecteezy.com/system/resources/previews/021/899/929/original/budget-management-icon-planner-personal-budget-and-family-budget-personal-financial-control-cash-flow-flat-illustration-vector.jpg"
                      />
                      <Container css={{ width: 400 }}>
                        <Text size={26} h3>
                          With our budgeting tool you'll be able to:
                        </Text>
                        <Text size={24} p>
                          1. Be more cognizant of your spending.
                        </Text>
                        <Text size={24} p>
                          2. Know where your money is going.
                        </Text>
                        <Text size={24} p>
                          3. Become a better budgeter.
                        </Text>
                        <Spacer y={2} />
                        <Link href="/Budget">
                          <Button flat size={"xl"} auto>
                            Start Budgeting
                          </Button>
                        </Link>
                      </Container>
                    </Row>
                  </Container>
                </Card.Body>
              </Card>
            </Col>
          </Container>
        </Row>
        <Spacer y={4} />
        <Container responsive>
          {/* <Row> */}
          <Spacer y={4} />
          {/* <Container> */}
          <Text size={32} h2>
            Brush up on your financial knowledge and check out our quick lessons
            on money management and spending.
          </Text>
          {/* </Container> */}

          <Card css={{ width: 900 }}>
            <Card.Body>
              <Container responsive>
                <Row>
                  <Col>
                    <Text size={24} p>
                      Our learning platform offers quick and thorough modules to
                      give you the knowledge you need to be successful. Track
                      your progress, and celebrate milestones along the way.
                    </Text>
                    <Spacer y={2} />
                    <Link href="/Dashboard/Modules">
                      <Button flat color={"success"} auto size={"xl"}>
                        Start Learning
                      </Button>
                    </Link>
                  </Col>
                  <img src="https://img.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg?w=2000&t=st=1690904398~exp=1690904998~hmac=9f3071f8f17a50a1e57f35bc396df4c2e7449be07b93577e38159d6333feed0d" />
                </Row>
              </Container>
            </Card.Body>
          </Card>
          {/* </Row> */}
        </Container>
      </Container>
      <Spacer y={10} />
      <Footer />
    </div>
  );
};