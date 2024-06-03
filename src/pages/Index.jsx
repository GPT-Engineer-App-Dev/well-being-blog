import { Container, Text, VStack, Heading, Box, Image, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="2xl" textAlign="center">
          Health and Wellness Blog
        </Heading>
        <Box>
          <Image src="/images/health-wellness.jpg" alt="Health and Wellness" borderRadius="md" />
        </Box>
        <Text fontSize="lg">
          Welcome to our Health and Wellness Blog. Here, we share tips, articles, and insights on how to live a healthier and happier life.
        </Text>
        <Box>
          <Heading as="h2" size="lg" mb={4}>
            Recent Posts
          </Heading>
          <VStack spacing={4} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">10 Tips for a Healthier Lifestyle</Heading>
              <Text mt={2}>Discover simple and effective ways to improve your daily habits and overall well-being.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">The Benefits of Regular Exercise</Heading>
              <Text mt={2}>Learn about the numerous physical and mental health benefits of staying active.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading as="h3" size="md">Healthy Eating: A Beginner's Guide</Heading>
              <Text mt={2}>Get started on your journey to better nutrition with our comprehensive guide.</Text>
              <Link color="teal.500" href="#">Read more</Link>
            </Box>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;