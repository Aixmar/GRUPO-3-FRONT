import {Box, Button, FormControl, FormLabel, Input, Stack, FormHelperText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import validate from "./validate";
import okIco from "../../assets/nice.png";

const UserForm = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [backResponse, setBackResponse] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    setIsSubmitting(!form.email || !form.password || hasErrors);
  }, [form, errors]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("http://localhost:3001/users", form);
    setBackResponse(data);
    setForm({ email: "", password: "" });
  };

  return (
    <Box bgGradient="linear-gradient(to right, #f27825, #eab830)"
    minH="100vh"
    display="flex"
    justifyContent="center"
    alignItems="center">
    <Stack
     bgGradient="linear(to-l,#000000, #272727)"
      color="white"
      borderRadius="md"
      w="333px"
      padding="8"
      spacing="6"
      as="form"
      onSubmit={submitHandler}
    >
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          type="email"
          name="email"
          value={form.email}
          onChange={inputChangeHandler}
          placeholder="example@example.com"
        />
        {errors.email && <FormHelperText color="red.500">{errors.email}</FormHelperText>}
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          name="password"
          value={form.password}
          onChange={inputChangeHandler}
        />
        {errors.password && (
          <FormHelperText color="red.500">{errors.password}</FormHelperText>
        )}
      </FormControl>
      <Button
        type="submit"
        bg={"orange.400"}
        color={"white"}
        _hover={{ bg: "orange.500" }}
        isDisabled={isSubmitting}
      >
        Sign In
      </Button>
      <Link to="/forgot-password">Forgot Password</Link>
      <dialog id="signinModal">
        <img src={okIco} alt="nice" />
        <h2>Welcome back, {backResponse.name}!</h2>
        <div>
          <Link to="/home">
            <Button
              bg={"orange.400"}
              color={"white"}
              _hover={{ bg: "orange.500" }}
            >
              Go to Home
            </Button>
          </Link>
        </div>
      </dialog>
    </Stack>
    </Box>
  );
};

export default UserForm;




       

