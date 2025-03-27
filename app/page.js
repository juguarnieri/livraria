import Header from "../components/Header";
import Poster from "../components/Poster";

export default function Home() {
  return (
      <div>
          <Header />
          <Poster 
          title="Descubra mundos extraordinários"
          description="Promoção de lançamentos com até 30% de desconto!"
          buttonText="Ver ofertas"
        />
      </div>
  );
}  
      