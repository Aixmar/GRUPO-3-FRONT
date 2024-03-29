import { useDispatch, useSelector } from "react-redux";
import { popToCart } from "../../../../redux/actions";
import { Link as RouterLink } from "react-router-dom";
import {Box, Text, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode, useDisclosure,} from "@chakra-ui/react";
import { CartItem } from "./CartItem/CartItem";
import { CartOrderSummary } from "./CartOrderSummary/CartOrderSummary";
import { updateCartItemQuantity } from "../../../../redux/actions";
// import { cartData } from './_data'

const Table = () => {
  const cart = useSelector((state) => state.cart) || [];
 
  const dispatch = useDispatch();

  const onClickDelete = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    dispatch(popToCart(newCart));
  };

  const onChangeQuantity = (quantity, itemId) => {
    console.log(quantity, itemId);
    dispatch(updateCartItemQuantity(itemId, quantity));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price*item.quantity, 0);
  
  

  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
      <Stack direction={{ base: "column", lg: "row" }} align={{ lg: "flex-start" }} spacing={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading color="#f27825" fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>

          <Stack spacing="6">
          {cart.length > 0 && cart.map((item, index) => (
              <CartItem
              
                key={index}
                {...item}
                index={index}
                itemId={item.id}
                onClickDelete={onClickDelete}
                onChangeQuantity={onChangeQuantity}
              />
            ))}
            {cart.length < 1 && <Box color="white">NO ITEMS TO DISPLAY</Box> }
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalPrice={totalPrice.toFixed(2)} />
          <HStack mt="6" fontWeight="semibold">
            <Text color="white">or</Text>
            <Link color={mode("orange.500", "orange.200")} as={RouterLink} to="/allpizzas">
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Table;
