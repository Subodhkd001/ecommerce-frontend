import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"

const Home = () => {
  const addToCartHandler = () => {}
  return (
    <div className="home">
      <section></section>

      <h1>Latest Products
        <Link to={"/search"} className="findmore">More</Link>
      </h1>

      <main>
        <ProductCard productId="asdasd" name="Macbook" price={44545} stock={5} handler={addToCartHandler} photo="https://m.media-amazon.com/images/I/71jG+e7roXL._AC_SL1500_.jpg"/>
      </main>

    </div>
  )
}

export default Home