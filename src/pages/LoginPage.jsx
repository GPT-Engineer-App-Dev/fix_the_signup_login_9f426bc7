import { Box, FormControl, FormLabel, Input, Button, VStack, Text, Divider, HStack } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <Box p={8} maxWidth="md" mx="auto">
      <VStack spacing={6}>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" />
          {}
        </FormControl>
        <Button size="lg" colorScheme="blue" w="full" mt={4} boxShadow="md">
          Login
        </Button>
        <Text>
          Don't have an account?{" "}
          <RouterLink to="/signup" color="blue.500">
            Sign Up
          </RouterLink>
        </Text>
        <Divider />
        <Text>Or login with:</Text>
        <HStack>
          <Button leftIcon={<FaGoogle />} variant="outline">
            Google
          </Button>
          <Button leftIcon={<FaFacebook />} variant="outline">
            Facebook
          </Button>
          <Button leftIcon={<FaTwitter />} variant="outline">
            Twitter
          </Button>
        </HStack>
      </VStack>
    </Box>
  );
};

export default LoginPage;
