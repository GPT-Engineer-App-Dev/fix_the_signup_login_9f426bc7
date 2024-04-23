import { Box, FormControl, FormLabel, Input, Button, VStack, Text, Divider, HStack } from "@chakra-ui/react";
import { FaGoogle, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const SignUpPage = () => {
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
          Sign Up
        </Button>
        <Text>
          Already have an account?{" "}
          <RouterLink to="/login" color="blue.500">
            Login
          </RouterLink>
        </Text>
        <Divider />
        <Text>Or sign up with:</Text>
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

export default SignUpPage;
