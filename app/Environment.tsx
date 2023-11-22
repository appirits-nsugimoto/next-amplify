"use server";

import { Heading, List, ListItem, Stack } from "@chakra-ui/react";

export const Environment = () => {
  return (
    <Stack>
      <Heading as="h2">環境変数</Heading>
      <List>
        {Object.entries(process.env).map(([key, value]) => (
          <ListItem key={key}>
            {key}: {value}
          </ListItem>
        ))}
      </List>
    </Stack>
  );
};
