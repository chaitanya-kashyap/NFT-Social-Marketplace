import { useRouter } from "next/router";
import Footer from "../../components/landing/footer";
import Navbar from "../../components/landing/navbar";


export default function Collections() {
    const router = useRouter()
    return  (
        <>
           <Navbar />
           <h2>{router.query.collectionId}</h2>
           <Footer /> 
        </>
    )
}