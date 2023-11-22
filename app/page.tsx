import Image from "next/image";
import styles from "./page.module.css";
import { Environment } from "./Environment";
import { Center, Container, Divider, Heading, Stack } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack as="main" spacing={2}>
      <Stack as="header">
        <Heading as="h1" p={2}>
          こんにちは
        </Heading>
        <Divider />
      </Stack>
      <Container>
        <Environment />
      </Container>
    </Stack>
  );
}
