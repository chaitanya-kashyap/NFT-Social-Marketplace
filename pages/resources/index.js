import Footer from "../../components/landing/footer";
import Navbar from "../../components/landing/navbar";
import Resource from "../../components/landing/resources";
import LoggedNavbar from "../../components/main/loggedNavbar";
import { useWeb3 } from '@3rdweb/hooks'


export default function Resources() {
    const { address } = useWeb3();

    return (
        <>
        {address ? (
        <>
          <LoggedNavbar />
          <Resource />
          <Footer />
        </>
        ) : (
          <>
            <Navbar />
            <Resource />
            <Footer />
          </>
        )};
        </>
    )
}