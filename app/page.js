import SectionHeader from "../components/SectionHeader";
import WeeklyHighlights from "../components/WeeklyHighlights";
import PopularCategories from "../components/PopularCategories";
import Header from "../components/Header";
import Poster from "../components/Poster";
import "../app/home.css";
import Footer from "../components/Footer"; 

const featuredBooks = [
  {
    image: "/pequenoPrincipe.png",
    title: "O Pequeno Príncipe",
    author: "Antoine de Saint-Exupéry",
    price: "R$ 29.90",
    rating: 4.9,
    tags: ["Clássico", "Fábula"],
    isNew: false,
  },
  {
    image: "/anneFrank.png",
    title: "O Diário de Anne Frank",
    author: "Anne Frank",
    price: "R$ 34.90",
    rating: 4.8,
    tags: ["História", "Biografia"],
    isNew: false,
  },
  {
    image: "/oGrandeDesafio.png",
    title: "O Grande Desafio",
    author: "Manoel Bandeira",
    price: "R$ 27.90",
    rating: 4.6,
    tags: ["Poesia", "Literatura Brasileira"],
    isNew: false,
  },
  {
    image: "/oSignoDosQuatro.png",
    title: "Sherlock Holmes: O Signo dos Quatro",
    author: "Arthur Conan Doyle",
    price: "R$ 39.90",
    rating: 4.7,
    tags: ["Mistério", "Clássico"],
    isNew: false,
  },
];

const newReleases = [
  {
    image: "/misterioQuantico.png",
    title: "O Mistério Quântico",
    author: "Fernanda Oliveira",
    price: "R$ 59.90",
    rating: 4.9,
    tags: ["Física", "Mistério"],
    isNew: true, 
  },
  {
    image: "/caminhosFuturos.png",
    title: "Caminhos do Futuro",
    author: "Rafael Torres",
    price: "R$ 45.90",
    rating: 4.6,
    tags: ["Ficção Científica", "Tecnologia"],
    isNew: true,
  },
  {
    image: "/arteDaCriatividade.png",
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
