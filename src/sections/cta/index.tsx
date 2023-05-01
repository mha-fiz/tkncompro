import { Button, Container, Text, Title, createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#080a30",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },
  content: {
    backgroundColor: theme.colors.violet[9],
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    minHeight: "20rem",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },
}));

export function CallToAction() {
  const { classes } = useStyles();

  return (
    <div className={classes.root}>
      <Container size="lg" className={classes.content}>
        <Title color="gray.0">Get your own XXXX Token now!</Title>
        <Button
          size="md"
          variant="gradient"
          gradient={{ from: "violet", to: "grape" }}
        >
          Buy XXXX Token
        </Button>
      </Container>
    </div>
  );
}
