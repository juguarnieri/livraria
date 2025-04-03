import SectionHeader from "../components/SectionHeader";
import WeeklyHighlights from "../components/WeeklyHighlights";
import PopularCategories from "../components/PopularCategories";
import Header from "../components/Header";
import Poster from "../components/Poster";
import "../app/home.css";
import Footer from "../components/Footer"; 

const featuredBooks = [
  {
    image: "/todasAsFlores.png",
    title: "Todas as Flores Que Não te Enviei",
    author: "Felipe Rocha",
    price: "R$ 49.90",
    rating: 4.8,
    tags: ["Romance", "Drama"],
    isNew: false,
  },
  {
    image: "/aristóteles.png",
    title: "Aristóteles e Dante Mergulham nas Águas do Mundo",
    author: "Benjamin Alire Sáenz",
    price: "R$ 39.90",
    rating: 4.9,
    tags: ["Romance", "Drama"],
    isNew: false,
  },
  {
    image: "/eAssimQueAcaba.png",
    title: "É Assim Que Acaba",
    author: "Colleen Hoover",
    price: "R$ 49.90",
    rating: 4.6,
    tags: ["Romance", "Drama"],
    isNew: false,
  },
  {
    image: "/amorAzeitonas.png",
    title: "Amor e Azeitonas",
    author: "Mariana Enríquez",
    price: "R$ 39.90",
    rating: 4.7,
    tags: ["Romance", "Comédia"],
    isNew: false,
  },
];

const newReleases = [
  {
    image: "/eAssimQueComeca.png",
    title: "É Assim Que Começa",
    author: "Colleen Hoover",
    price: "R$ 59.90",
    rating: 4.5,
    tags: ["Romance", "Drama"],
    isNew: true, 
  },
  {
    image: "/oMapaDeNosDois.png",
    title: "O Mapa de Nós Dois",
    author: "Kristin Dwyer",
    price: "R$ 45.90",
    rating: 4.8,
    tags: ["Romance", "Drama"],
    isNew: true,
  },
  {
    image: "/aGuerraDosFuracoes.png",
    title: "A Guerra dos Furações",
    author: "L. E. Sterling",
    price: "R$ 49.90",
    rating: 4.6,
    tags: ["Romance", "Aventura"],
    isNew: true,
  },
  {
    image: "/cinderelaEmBuscaDaPerefeicao.png",
    title: "Cinderela em Busca da Perfeição",
    author: "Colleen Hoover",
    price: "R$ 39.90",
    rating: 4.7,
    tags: ["Romance", "Drama"],
    isNew: true,
  },
];

const categories = [
  { name: "Ficção Científica", icon: "🚀" },
  { name: "Romance", icon: "❤️" },
  { name: "Biografia", icon: "🧑‍🏫" },
  { name: "Tecnologia", icon: "💻" },
  { name: "Fantasia", icon: "🧙" },
  { name: "História", icon: "📜" },
  { name: "Autoajuda", icon: "🌱" },
  { name: "Mistério", icon: "🔍" },
  { name: "Religioso", icon: "🕍" },
  { name: "Infantil", icon: "🧸🛴" },
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
      <SectionHeader title="Destaques da Semana" linkText="Ver todos" />
      <WeeklyHighlights books={featuredBooks} />
      <SectionHeader title="Categorias Populares" linkText="Ver todos" />
      <PopularCategories categories={categories} />
      <SectionHeader title="Lançamentos" linkText="Ver todos" />
      <WeeklyHighlights books={newReleases} /> 
      <div className="newsletter">
        <h2 className="newsletter-title">Fique por dentro das novidades!</h2>
        <p className="newsletter-description">
          Assine nossa newsletter e receba atualizações sobre novos lançamentos,<br />
          promoções exclusivas e dicas de leitura.
        </p>
        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Assinar
          </button>
        </form>
      </div>
      <Footer /> 
    </div>
  );
}
