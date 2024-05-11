import CardList from "@/components/Principal/CardList/CardList"
import PrincipalHeader from "@/components/Principal/Principal_Header/PrincipalHeader"
import Hero from "@/components/Principal/Hero/Hero"
import Filtrado from "@/components/Principal/Filtrado/Filtrado"
import Footer from "@/components/Footer/Footer"
import Provider from "@/Context/Context"

const HomePrincipal: React.FC = () =>{
  
    return (
        <>
            <Provider>
                <PrincipalHeader/>
                <Hero/>
                <Filtrado/>
                <CardList/>
                <Footer/>
            </Provider>
        </>
    )
}
export default HomePrincipal