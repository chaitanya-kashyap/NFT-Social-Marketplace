import { useWeb3 } from "@3rdweb/hooks";
import Footer from "../components/landing/footer";
import Navbar from "../components/landing/navbar";
import LoggedNavbar from "../components/main/loggedNavbar";

export default function Community() {
    const address = useWeb3()
    return (
        <>
        {address ? (
            <>
                <LoggedNavbar />
                <Footer />
            </>
        ) : (
            <>
                <Navbar />
                <Footer />  
            </>
        )}
        </>
    )
}