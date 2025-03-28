import Header from "../components/Header";
import Poster from "../components/Poster";
import SectionHeader from "../components/SectionHeader";
import WeeklyHighlights from "../components/WeeklyHighlights";
import PopularCategories from "../components/PopularCategories";
import "../app/home.css";

const featuredBooks = [
  {
    title: "O Algoritmo da Imaginação",
    author: "Ana Luz Santos",
    price: "R$ 49.90",
    rating: 4.5,
    tags: ["Ficção Científica", "Tecnologia"],
    isNew: false,
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

const newReleases = [
  {
    title: "O Mistério Quântico",
    author: "Fernanda Oliveira",
    price: "R$ 59.90",
    rating: 4.9,
    tags: ["Física", "Mistério"],
    isNew: true,
  },
  {
    title: "Caminhos do Futuro",
    author: "Rafael Torres",
    price: "R$ 45.90",
    rating: 4.6,
    tags: ["Ficção Científica", "Tecnologia"],
    isNew: true,
  },
  {
    title: "A Arte da Criatividade",
    author: "Beatriz Ramos",
    price: "R$ 50.00",
    rating: 4.7,
    tags: ["Autoajuda", "Inovação"],
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
          Assine nossa newsletter e receba atualizações sobre novos lançamentos,
          <br />
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
    </div>
  );
}
