import { Container } from "./../components/Container";
import { Text } from "./../components/Text";
import { Button } from "./../components/Button";

export function HomePage() {
  return (
      <Container background="#fff" padding="29">
        <Text text="New Project" fontSize="20"></Text>
        <Button size="small" variant="contained" color="primary" onClickScript="">Click me</Button>
      </Container>
  );
}