import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { pushToCart } from "../../redux/actions";
import { Button, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const SideDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [side, setSide] = useState({})

    const clickHandler = () => {
        const modal = document.querySelector('#addSideModal');
        dispatch(pushToCart(side))
        modal.showModal();
      }
    //   const clickHandlerModal = () => {
    //     const modal = document.querySelector('#createPizzaModal');
    //     modal.close()
    //   }

    useEffect(() => {
        axios
            .get(`/pizzas/${id}`)
            .then((data) => data.data)
            .then((side) => setSide(side));
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="1366px" height="768px" bgGradient="linear-gradient(to right, #f27825, #eab830)">
        <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="0 0 20px rgba(0, 0, 0, 0.1)" >
          <Image src={side.image} alt={side.name} objectFit="cover" h="300px" w="100%" />
          <Box p="6" bgGradient="linear(to-l,#000000, #272727)">
            <Box d="flex" alignItems="baseline" >
              <Text fontSize="2xl" fontWeight="semibold" mr="2" color="white">{side.name}</Text>
              <Text fontSize="lg" color="white">$ {side.price}</Text>
            </Box>
            <Box mt="2" lineHeight="tall">
              <Text fontSize="lg">{side.description}</Text>
            </Box>
            <Box mt="2" d="flex" justifyContent="space-between" alignItems="center">
              <Link to='/allsides'><Button variantColor="teal"
                borderRadius="full"
                padding="10px"
                background="linear-gradient(to right, #f27833, #eab830)" >Back to menu</Button>
              </Link>
              <Button
                isDisabled={side.stock === 0 ? true : false}
                onClick={clickHandler}
                variantColor="orange"
                borderRadius="full"
                padding="10px"
                margin="10px"
                background="linear-gradient(to right, #f27833, #eab830)"
              >Add to cart</Button>
            </Box>
          </Box>

        </Box>
        </Box>
      );
}

export default SideDetail