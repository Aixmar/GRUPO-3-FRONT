import { Box, Text, Flex } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import ItemCardFavoriteContainer from "../../components/ItemCardFavoriteContainer/ItemCardFavoriteContainer";

const UserStars = () => {
  const user = useSelector((state) => state.user);
  const userFavorites = user.favorites || []

  // console.log(userFavorites);
  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)" direction="column" minHeight='100vh' >
      
      <Box flex="1 1 auto" m='5rem'>
        <ItemCardFavoriteContainer userFavorites={userFavorites} />
      </Box>
    </Flex>
  );
};

export default UserStars;
