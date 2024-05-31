import { Box, Container, Heading, SimpleGrid, Image, Text, Link, Input, Checkbox, CheckboxGroup, VStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark } from "@chakra-ui/react";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  const products = [
    { id: 1, name: "Sample Product", price: 99.99, image: "/images/sample-product.jpg", category: "Electronics" },
    // Add more products here
  ];

  const categories = ["Electronics", "Books", "Clothing"];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Products</Heading>
      <Input
        placeholder="Search for products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        mb={4}
      />
      <Box mb={4}>
        <Heading size="md" mb={2}>Categories</Heading>
        <CheckboxGroup value={selectedCategories} onChange={setSelectedCategories}>
          <VStack align="start">
            {categories.map(category => (
              <Checkbox key={category} value={category}>{category}</Checkbox>
            ))}
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box mb={4}>
        <Heading size="md" mb={2}>Price Range</Heading>
        <Slider
          aria-label="price-range"
          defaultValue={[0, 100]}
          min={0}
          max={100}
          step={1}
          onChangeEnd={(val) => setPriceRange(val)}
        >
          <SliderMark value={priceRange[0]} mt="1" ml="-2.5" fontSize="sm">
            ${priceRange[0]}
          </SliderMark>
          <SliderMark value={priceRange[1]} mt="1" ml="-2.5" fontSize="sm">
            ${priceRange[1]}
          </SliderMark>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb boxSize={6} index={0} />
          <SliderThumb boxSize={6} index={1} />
        </Slider>
      </Box>
      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        {filteredProducts.map(product => (
          <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={product.image} alt={product.name} />
            <Box p={6}>
              <Heading size="md">{product.name}</Heading>
              <Text mt={2}>${product.price.toFixed(2)}</Text>
              <Link as={RouterLink} to={`/products/${product.id}`} color="blue.500" mt={2} display="block">
                View Details
              </Link>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Products;