// import { useState } from "react";
import {
  createStyles,
  Header as MantineHeader,
  Container,
  Group,
  Burger,
  Paper,
  Text,
  // Transition,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const HEADER_HEIGHT = rem(60);

const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
    backgroundColor: "#050830",
    borderBottom: "0",
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    backgroundColor: "#7950f2",
    color: theme.colors.gray[0],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: "#be4bdb",
      color: theme.colors.gray[0],
      transition: "all .2s ease-out",
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "dark",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "dark", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderProps {
  links: { link: string; label: string; scrollId: string }[];
}

export function Header({ links }: HeaderProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  // const [active, setActive] = useState(links[0].link);
  const { classes } = useStyles();

  const handleScrollonClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const items = links.map((item) => (
    <a
      key={item.label}
      href={item.link}
      className={classes.link}
      onClick={(event) => {
        event.preventDefault();
        handleScrollonClick(item.scrollId);
        close();
      }}
    >
      {item.label}
    </a>
  ));

  return (
    <MantineHeader height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Text size="lg" color="gray.0">
          LOGO
        </Text>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>

        <Burger
          color="violet"
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        {opened && (
          <Paper className={classes.dropdown} withBorder>
            {items}
          </Paper>
        )}
      </Container>
    </MantineHeader>
  );
}
