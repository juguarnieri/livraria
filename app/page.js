import Header from "../components/Header";
import Poster from "../components/Poster";
import WeeklyHighlights from "../components/WeeklyHighlights";

const featuredBooks = [
  {
    title: "O Algoritmo da Imaginação",
    author: "Ana Luz Santos",
    price: "R$ 49.90",
    rating: 4.5,
    tags: ["Ficção Científica", "Tecnologia"],
    isNew: false, // NÃO É LANÇAMENTO
  },
  {
    title: "Conexões Invisíveis",
    author: "Marcos Silva",
    price: "R$ 39.90",
    rating: 4.8,
    tags: ["Romance", "Tecnologia"],
    isNew: false,
  },
  {
    title: "Além do Código",
    author: "Julia Mendes",
    price: "R$ 55.90",
    rating: 4.2,
    tags: ["Biografia", "Programação"],
    isNew: false,
  },
  {
    title: "Universos Paralelos",
    author: "Lucas Costa",
    price: "R$ 47.90",
    rating: 4.7,
    tags: ["Ficção Científica", "Filosofia"],
    isNew: false,
  },
];

export default function Home() {
  return (
      <div>
          <Header />
          <Poster 
          title="Descubra mundos extraordinários"
          description="Promoção de lançamentos com até 30% de desconto!"
          buttonText="Ver ofertas"
        />
         <WeeklyHighlights books={featuredBooks} />
      </div>
  );
}  
      