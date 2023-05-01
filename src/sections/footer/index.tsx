import {
  createStyles,
  Container,
  Group,
  Anchor,
  Text,
  //   rem,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: "#050830",
    // marginTop: `${rem(120)}`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      marginTop: theme.spacing.md,
    },
  },
}));

interface FooterProps {
  links: { link: string; label: string }[];
}

export function Footer({ links }: FooterProps) {
  const { classes } = useStyles();
  const items = links.map((link) => (
    <Anchor<"a">
      color="dimmed"
      key={link.label}
      href={link.link}
      onClick={(event) => event.preventDefault()}
      size="sm"
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Text color="gray.0">LOGO</Text>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}
