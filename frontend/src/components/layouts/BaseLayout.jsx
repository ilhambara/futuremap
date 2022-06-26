import { Box, Container, Flex } from "@chakra-ui/react";

export default function BaseLayout({ children, bgColor }) {
  return (
    <Box as="section" width="full" bgColor={bgColor}>
      <Container maxW="container.xl" h="90vh" color="#1a202c">
        <Flex
          w="full"
          h="full"
          direction="column"
          align="center"
          justify="center"
        >
          {children}
        </Flex>
      </Container>
    </Box>
  );
}
