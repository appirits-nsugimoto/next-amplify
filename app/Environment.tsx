"use server";

import { Heading, ListItem, Stack, UnorderedList } from "@chakra-ui/react";

export const Environment = () => {
  return (
    <Stack>
      <Heading as="h2" size="md">
        環境変数
      </Heading>
      <UnorderedList>
        {Object.entries(process.env).map(([key, value]) => (
          <ListItem key={key}>
            <code>
              <b>{key}</b>
            </code>
            : <code>{value}</code>
          </ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};
