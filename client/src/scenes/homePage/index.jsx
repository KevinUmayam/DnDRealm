import { Box } from "@mui/material"
import Navbar from "scenes/navbar"
import { useSelector } from "react-redux";

const HomePage = ()  => {
    const {_id} = useSelector((state) => state.user);
    return (<Box>
        <Navbar userId={_id} />
    </Box>)
}

export default HomePage