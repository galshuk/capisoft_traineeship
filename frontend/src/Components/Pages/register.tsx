import React, { useState } from "react";
import { useAuth } from '../Utility/AuthContext.tsx';
import { Link as RouterLink } from "react-router-dom";
import { Box, Heading, Text, Input, Button, Stack, Flex } from "@chakra-ui/react";
import { registerSchema } from "../Utility/inputValidation.tsx"

function Register() {
    const{ register } = useAuth();
    const[fullname, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[phoneNum, setPhoneNum] = useState("");
    const[DoB, setDoB] = useState("");

    const [errors, setErrors] = useState<Record<string, string>>({});

    function handleSubmit(e: React.SubmitEvent) {
        e.preventDefault();

        const result = registerSchema.safeParse({ email, password, name: fullname, phoneNum, DoB});

        if(!result.success){
            const fieldErrors: Record<string, string> = {};
            for (const issue of result.error.issues) {
                fieldErrors[issue.path[0] as string] = issue.message;
            }
            setErrors(fieldErrors);
            return;
        }
        setErrors({});
        register(fullname, email, password, phoneNum, DoB);
    }

    return (
        <Flex minH="100vh" align="center" justify="center" bg="bg.canvas">
        <Box bg="bg.surface" p={8} borderRadius="xl" boxShadow="lg" maxW="608px" w="100%">
            <Stack gap={2} mb={6}>
                <Heading size="lg" fontWeight="semibold" >Sign up!</Heading>
                <Text color="text.muted" fontSize="md" fontWeight = "medium">
                    Register to our service to be able to invite clients!
                </Text>
            </Stack>

            <form onSubmit = {handleSubmit}>
                <Stack gap = {4}>
                    <Box>
                        <Input
                            type="text"
                            placeholder = "Full Name"
                            fontWeight= "normal"
                            value={fullname}
                            onChange={(e) => setName(e.target.value)} />
                            {errors.name && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                {errors.name}
                                </Text>
                            )}
                    </Box>

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

                    <Box>
                        <Input
                            type="tel"
                            placeholder = "Phone Number"
                            fontWeight= "normal"
                            value={phoneNum}
                            onChange={(e) => setPhoneNum(e.target.value)} />
                            {errors.phoneNum && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                {errors.phoneNum}
                                </Text>
                            )}
                    </Box>

                    <Box>
                        <Input
                            type="date"
                            placeholder = "Date Of Birth"
                            fontWeight= "normal"
                            value={DoB}
                            onChange={(e) => setDoB(e.target.value)} />
                            {errors.DoB && (
                                <Text color="red.500" fontSize="sm" mt={1}>
                                {errors.DoB}
                                </Text>
                            )}
                    </Box>

                    <Button type="submit" colorPalette="brand" w="100%" color="#000000">
                        Register
                    </Button>

                    <Text fontSize="sm" textAlign="center" fontWeight="semibold">
                        Already have an account? <RouterLink to="/login" style={{textDecoration: "underline"}}>Log In</RouterLink>
                    </Text>

                </Stack>
            </form>
        </ Box>
        </Flex>
    );
}

export default Register;
