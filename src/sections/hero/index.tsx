import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
} from "@mantine/core";
import Lottie from "lottie-react";
import blockChainLottie from "../../assets/blockchain.json";

const useStyles = createStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://www.linkpicture.com/q/5524750_2862666.jpg)",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    minHeight: `calc(100vh - ${rem(60)})`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column-reverse",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("xs")]: {
      width: "100%",
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

export function Hero() {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              The{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "violet", to: "grape" }}
              >
                XXXX
              </Text>{" "}
              Token
            </Title>

            <Text className={classes.description} mt={30}>
              With XXXX Token you will get the most out of the value. You can
              use it for payment and it comes with a wide range of benefits and
              utilities.
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "violet", to: "grape" }}
              size="xl"
              className={classes.control}
              mt={40}
              onClick={() => {
                const element = document.getElementById("section-features");
                element?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Learn more
            </Button>
          </div>
          <Lottie
            animationData={blockChainLottie}
            className={classes.animatedIcon}
          />
        </div>
      </Container>
    </div>
  );
}
