import React from "react";
import {
  Container,
  Collapse,
  Text,
  Spacer,
  Button,
  Row,
} from "@nextui-org/react";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import { useNavigate } from "react-router";
import "./ModulesHome.css";
const ModulesHome = ({ appState, setAppState }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Signup");
  };
  return (
    <div>
      <Nav appState={appState} setAppState={setAppState} />
      <Container>
        <Collapse.Group splitted>
          <Collapse
            shadow
            title="Money Matters"
            css={{ backgroundColor: "#65A838", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Explore the art of budgeting, uncover the secrets of smart saving,
              and unravel the mysteries of debt management. From setting
              financial goals that align with your dreams to making informed
              investment decisions, this module will equip you with tools to
              make confident choices about your financial future.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="Financial Futurists"
            css={{ backgroundColor: "#166417", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Join us on a journey of financial enlightenment as we demystify
              concepts such as compound interest, emergency funds, and the power
              of mindful spending. Whether you're a student just embarking on
              your financial journey or an experienced professional seeking to
              enhance your financial prowess, "Mastering Your Finances" promises
              to lay the cornerstone for a lifetime of fiscal success.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="Live to Save"
            css={{ backgroundColor: "#E2F9B8", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Uncover the techniques to cut unnecessary expenses, create an
              effective budget, and establish an emergency fund that offers
              security during unforeseen circumstances. Gain insights into
              automating your savings and explore the various avenues to
              optimize your funds, including high-yield savings accounts,
              investments, and retirement planning.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="The Credit Chronicles"
            css={{ backgroundColor: "#E2F9B8", color: "white" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Discover the fundamental concepts such as creditworthiness, credit
              scores, types of debt, and interest rates, providing knowledge for
              responsible borrowing decisions and building a strong credit
              profile.
            </Text>
          </Collapse>

          <Collapse
            shadow
            title="From Pennies to Prosperity"
            css={{ backgroundColor: "#E2F9B8", color: "gray" }}
          >
            <Text size={26} css={{ fontWeight: "$normal", color: "gray" }} h2>
              Learn the vital role in building wealth and achieving financial
              goals, covering various investment options, risk and return
              considerations, and emphasizing the significance of starting early
              on the investment journey.
            </Text>
          </Collapse>
        </Collapse.Group>
        <Spacer y={2} />
        <Container
          css={{
            textAlign: "center",
          }}
        >
          <Text h2 size={28} css={{ fontWeight: "$normal" }}>
            Interested in becoming a financial wiz? Sign up with us today to
            start your journey towards financial freedom!
          </Text>
          <Row css={{ justifyContent: "center" }}>
            <Button
              size={"xl"}
              auto
              color={"success"}
              flat
              onPress={handleClick}
            >
              Join Us Today!
            </Button>
          </Row>
        </Container>
      </Container>
      <Spacer y={24} />
      <Footer />
    </div>
  );
};

export default ModulesHome;
