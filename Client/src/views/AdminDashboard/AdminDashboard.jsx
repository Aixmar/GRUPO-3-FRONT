import {Flex} from "@chakra-ui/react"
import SideBar from "../../components/SideBar/SideBar"
import MainPage from "./MainPage/MainPage"
import { Route } from "react-router-dom"

const AdminDashboard = () => {

    return (
        <Flex bgGradient="linear(to-l,#000000, #272727)">
            <Flex>
            <SideBar />
            </Flex>

        <Flex >
            <MainPage/>
        </Flex>

        </Flex>
        
    )
}

export default AdminDashboard