import {
  createStyles,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
} from "@mantine/core";
import { BsLock } from "react-icons/bs";
import { BsSpeedometer } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

const mockdata = [
  {
    title: "Extreme performance",
    description:
      "Our networks enable faster transactions, higher capacity, and lower gas fees.",
    icon: BsSpeedometer,
  },
  {
    title: "Privacy focused",
    description:
      "We have a very high priority level of data and network security, so the traffic between users and developers is always safe.",
    icon: BsLock,
  },
  {
    title: "No third parties",
    description:
      "A fully decentralized network with support for all Ethereum Virtual Machine (EVM) tools.",
    icon: BiUser,
  },
];

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#050830",
    minHeight: "100vh",
  },
  title: {
    fontSize: rem(34),
    fontWeight: 900,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(24),
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    minHeight: "350px",
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
    backgroundColor: "#131740",
    opacity: ".9",
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.colors.violet[9],
      width: rem(45),
      height: rem(2),
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();

  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon size={rem(50)} stroke={2} color="#ff06b7" />
      <Text
        fz="lg"
        fw={700}
        color="gray.0"
        className={classes.cardTitle}
        mt="md"
      >
        {feature.title}
      </Text>
      <Text fz="sm" mt="sm" color="gray.0">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.root} id="section-features">
      <Container size="lg" py="xl">
        <Title
          order={2}
          className={classes.title}
          ta="center"
          mt="sm"
          color="gray.0"
        >
          Why Choose XXXX Token
        </Title>

        <Text c="dimmed" className={classes.description} ta="center" mt="md">
          Not only you will be able to use XXXX as a payment method, by
          investing in XXXX you'll get competitive exchange fees, better yield
          rates, and more.
        </Text>

        <SimpleGrid
          cols={3}
          spacing="xl"
          mt={50}
          breakpoints={[
            { maxWidth: "xs", cols: 1 },
            { maxWidth: "sm", cols: 2 },
          ]}
        >
          {features}
        </SimpleGrid>
      </Container>
    </div>
  );
}
