import Image from "next/image";
import styles from "./page.module.css";
import { Environment } from "./Environment";
import { Container, Heading } from "@chakra-ui/react";

export default function Home() {
  return (
    <main>
      <Heading as="h1">こんにちは</Heading>
      <Container>
        <Environment />
      </Container>
    </main>
  );
}
