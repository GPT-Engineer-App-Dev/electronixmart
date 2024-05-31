import { Box, Container, Heading, Image, Text, Button, VStack } from "@chakra-ui/react";

const ProductDetail = () => {
  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Image src="/images/sample-product.jpg" alt="Sample Product" />
        <Heading>Sample Product</Heading>
        <Text fontSize="2xl">$99.99</Text>
        <Text>
          This is a detailed description of the sample product. It has all the features you need and more.
        </Text>
        <Button colorScheme="blue">Add to Cart</Button>
      </VStack>
    </Container>
  );
};

export default ProductDetail;