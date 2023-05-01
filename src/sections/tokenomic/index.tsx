import {
  Badge,
  Card,
  Container,
  Flex,
  Stack,
  Text,
  Title,
  createStyles,
  rem,
} from "@mantine/core";
import Lottie from "lottie-react";
import cryptoLottie from "../../assets/crypto.json";

const useStyles = createStyles((theme) => ({
  root: {
    // paddingTop: `calc(${theme.spacing.xl} * 3)`,
    // paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    backgroundColor: "#080a30",
    minHeight: "100vh",
  },
  card: {
    minHeight: "350px",
    minWidth: "40%",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    backgroundColor: "#131740",
    opacity: ".9",

    [theme.fn.smallerThan("sm")]: {
      minWidth: "60%",
    },
    [theme.fn.smallerThan("xs")]: {
      minWidth: "100%",
    },
  },
  content: {
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

export function Tokenomic() {
  const { classes } = useStyles();
  return (
    <div className={classes.root} id="section-details">
      <Container size="lg">
        {/* <motion.div
        //   initial={{ opacity: 0 }}
          //   animate="visible"
          //   whileInView="visible"
          //   viewport={{ once: true }}
          //   transition={{ duration: 0.5, delay: 0.25 }}
        > */}
        <Title ta="center" mb={20} pt="lg" color="gray.0">
          Tokenomics
        </Title>
        {/* </motion.div> */}
        <Flex
          columnGap="xl"
          rowGap="xl"
          align="center"
          justify="center"
          className={classes.content}
        >
          <Card shadow="md" radius="md" className={classes.card}>
            <Stack spacing="sm" align="center">
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Token name:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                XXXX Token
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Token symbol:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                XXXX
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Total Supply:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                1 billion XXXX
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Decimal:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                9
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Network:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                Binance Smart Chain
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Buy Tax:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                5%
              </Text>
              <Badge
                w="75%"
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                Sell Tax:{" "}
              </Badge>
              <Text color="gray.0" fw={500} span>
                5%
              </Text>
            </Stack>
          </Card>

          <Lottie
            animationData={cryptoLottie}
            className={classes.animatedIcon}
          />
        </Flex>
      </Container>
    </div>
  );
}
