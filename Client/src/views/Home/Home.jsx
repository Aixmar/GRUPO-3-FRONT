import { Box } from "@chakra-ui/react";
import Footer from "../../components/Footer/Footer";
import Slider from "../../components/Slider/Slider";
import { containerStyle, titleStyle } from "./homeStyles";

const Home = () => {
  return (
    <Box sx={containerStyle}>
      <Box sx={titleStyle}></Box>
      <Box>
        <Slider/>
      </Box>

      <Box flex="1" display="flex" flexDirection="column" justifyContent="flex-end">
        <Footer width="100%" />
      </Box>
    </Box>
  );
};

export default Home;