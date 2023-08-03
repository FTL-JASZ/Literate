import React from "react";
import {
  Grid,
  Card,
  Avatar,
  Text,
  Spacer,
  Container,
  Image,
} from "@nextui-org/react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import Soap from "../../assets/soap.png";
const Contact = ({ appState, setAppState }) => {
  return (
    <div>
      <Nav appState={appState} setAppState={setAppState} />
      <Container css={{ textAlign: "center" }}>
        <Text size={40} h1>
          Our Team
        </Text>
        <Grid.Container justify="center">
          <Grid xs={3}>
            <Card css={{ width: 300 }}>
              <Card.Body>
                <Avatar size={""} src={Soap} />
                <Spacer y={2} />
                <Container css={{ textAlign: "center" }}>
                  <Text size={18} color="gray" h2>
                    Fullstack Developer
                  </Text>
                  <Text size={26} h2>
                    Sophia Rodriguez
                  </Text>
                  <Text size={20} h2>
                    Student at Stevens Institute of Technology
                  </Text>
                  <Link
                    to={
                      "https://www.linkedin.com/in/sophia-rodriguez-1505a6260/"
                    }
                  >
                    <Image
                      width={60}
                      src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png"
                    />
                  </Link>
                </Container>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card css={{ width: 300 }}>
              <Card.Body>
                <Avatar
                  size={"$30"}
                  src="https://media.licdn.com/dms/image/D4E03AQEiAI53NlHrLA/profile-displayphoto-shrink_400_400/0/1665499410380?e=1696464000&v=beta&t=Vdu3R7GUDhXVIekstT1StVbhmu24zLyswiAZ4yINqB0"
                />
                <Spacer y={2} />
                <Container css={{ textAlign: "center" }}>
                  <Text size={18} color="gray" h2>
                    Frontend Developer
                  </Text>
                  <Text size={26} h2>
                    Ayslin Walker
                  </Text>
                  <Text size={20} h2>
                    Student at Cornell University
                  </Text>{" "}
                  <Image
                    width={60}
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png"
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>

          <Grid xs={3}>
            <Card css={{ width: 300 }}>
              <Card.Body>
                <Avatar
                  size={"$30"}
                  src="https://media.licdn.com/dms/image/C4D03AQFyqRhQBNNBeQ/profile-displayphoto-shrink_100_100/0/1627061530304?e=1696464000&v=beta&t=ApElIpiNcNSpvh9w9FEDaxN6GR071QY1IOB2zLHaKhM"
                />
                <Spacer y={2} />{" "}
                <Container css={{ textAlign: "center" }}>
                  <Text size={18} color="gray" h2>
                    Frontend Developer
                  </Text>
                  <Text size={26} h2>
                    Jovan Ford
                  </Text>
                  <Text size={20} h2>
                    Student at Morehouse College
                  </Text>{" "}
                  <Image
                    width={60}
                    src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-1024.png"
                  />
                </Container>
              </Card.Body>
            </Card>
          </Grid>
        </Grid.Container>
      </Container>
      <Spacer y={10} />
      <Footer />
    </div>
  );
};

export default Contact;