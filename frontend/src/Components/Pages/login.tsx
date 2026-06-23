import React, { useState } from "react";
import { useAuth } from '../Utility/AuthContext.tsx';
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Input, Button, Stack, Flex } from "@chakra-ui/react";
import { LoginSchema } from "../Utility/inputValidation.tsx"


function Login() {
    const { login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        const result = LoginSchema.safeParse({email, password});

        if (!result.success) {
            const fieldErrors: Record<string, string> = {};
            for (const issue of result.error.issues) {
                fieldErrors[issue.path[0] as string] = issue.message;
            }
            setErrors(fieldErrors);
            return;
        }
        setErrors({});
        login(email, password);
    }

    return (
        <Flex minH="100vh" align="center" justify="center" bg="bg.canvas">
        <Box bg="bg.surface" p={8} borderRadius="xl" boxShadow="lg" maxW="608px" w="100%">
            <Stack gap={2} mb={6}>
                <Heading size="lg" fontWeight="semibold" >Welcome</Heading>
                <Text color="text.muted" fontSize="md" fontWeight = "medium">
                    Great to see you! Please enter your account details.
                </Text>
            </Stack>

            <form onSubmit = {handleSubmit}>
                <Stack gap = {4}>
                    <Box>
                        <Input
                            type="email"
                            placeholder = "Email"
                            fontWeight= "normal"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                            {errors.email && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                {errors.email}
                                </Text>
                            )}
                    </Box>

                    <Box>
                        <Input
                            type="password"
                            placeholder = "Password"
                            fontWeight= "normal"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} />
                            {errors.password && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                {errors.password}
                                </Text>
                            )}
                    </Box>

                    <Button type="submit" colorPalette="brand" value="500" w="100%" color="#000000">
                        Login
                    </Button>

                    <Text fontSize="sm" textAlign="center" color = "#000000" fontWeight="semibold">
                        Don't have an account? <RouterLink to="/register" style={{textDecoration: "underline"}} >Sign up</RouterLink>
                    </Text>

                </Stack>
            </form>
        </ Box>
        </Flex>
    );
}

export default Login;
