import { Container, Text, Timeline, Title, createStyles } from "@mantine/core";
import Lottie from "lottie-react";
import blockchainConnectionLottie from "../../assets/blockchain-connection.json";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    backgroundColor: "#050830",
    minHeight: "100vh",
  },
  content: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  animatedIcon: {
    width: "50%",

    [theme.fn.smallerThan("sm")]: {
      width: "60%",
    },

    [theme.fn.smallerThan("xs")]: {
      width: "75%",
    },
  },
}));

export function RoadMap() {
  const { classes } = useStyles();

  return (
    <div className={classes.root} id="section-roadmap">
      <Container size="lg">
        <Title ta="center" mb={20} color="gray.0">
          Project Roadmap
        </Title>

        <div className={classes.content}>
          <Timeline active={2} bulletSize={24} lineWidth={2} color="grape">
            <Timeline.Item title="Phase 1" style={{ color: "white" }}>
              <Text size="md">Website launch</Text>
              <Text size="md">Social media launch</Text>
              <Text size="md">Community building</Text>
              <Text size="md">Audit</Text>
            </Timeline.Item>

            <Timeline.Item title="Phase 2" style={{ color: "white" }}>
              <Text size="md">Release Testnet & Faucet</Text>
              <Text size="md">CMC and CoinGecko</Text>
              <Text size="md">Press Release</Text>
              <Text size="md">Partnership</Text>
            </Timeline.Item>

            <Timeline.Item title="Phase 3" style={{ color: "white" }}>
              <Text size="md">Mainnet, Bridge, and Block Explorer Launch</Text>
              <Text size="md">CEX Listing</Text>
              <Text size="md">Ecosystem Building</Text>
              <Text size="md">Big Marketing</Text>
            </Timeline.Item>
          </Timeline>
          <Lottie
            animationData={blockchainConnectionLottie}
            className={classes.animatedIcon}
          />
        </div>
      </Container>
    </div>
  );
}
