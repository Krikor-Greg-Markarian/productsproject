import OrganicProduct from "../Src/Componnets/OrganicProduct";
import cn from "classnames";
import AngiesItem from "../Src/Componnets/AngiesItem";
import AmericanLager from "../Src/Componnets/AmericanLager";

const oprganicProduct = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/29/13/17/redwood-national-park-6667452__340.jpg",
    title: "Organic Frozen Triple Berry Blend",
    rating: "******",
    naming: "(4.0)",
    newPrice: "$32.85",
    oldPrice: "$33.8",
  },
];

const product = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/20/21/32/lake-6641880__340.jpg",
    smallTitle: "Snack",
    title: "Angie's Boomchickapop Sweet & Salty",
    rating: "*****",
    rateNumber: "(4.0)",
    gram: "70g",
    price: "$48.85",
    button: "Add",
    oldPrice: "$52.8",
    topButton: "New",
  },
];

const beverage = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2021/09/15/21/29/lake-6627781__340.jpg",
    title: "American Lager",
    description: "Real Good Boy",
    text: "For far away, behind the word mountains, far from the countries",
    button: "purchase today",
  },
];

export default function Home(props) {
  return (
    <div>
      <section>
        {oprganicProduct.map((item, idx) => (
          <OrganicProduct
            key={idx}
            imageUrl={item.imageUrl}
            title={item.title}
            rating={item.rating}
            naming={item.naming}
            newPrice={item.newPrice}
            oldPrice={item.oldPrice}
          />
        ))}
      </section>

      <section className={cn("pt-5")}>
        <div className={cn("grid grid-cols-3 gap-3")}>
          {product.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <AngiesItem
                imageUrl={item.imageUrl}
                smallTitle={item.smallTitle}
                title={item.title}
                rating={item.rating}
                rateNumber={item.rateNumber}
                gram={item.gram}
                price={item.price}
                button={item.button}
                oldPrice={item.oldPrice}
                topButton={item.topButton}
                isSelected={true}
              />
            </div>
          ))}
        </div>
      </section>

      <section className={cn("pt-5")}>
        <div className={cn("grid grid-cols-3 gap-3")}>
          {beverage.map((item, idx) => (
            <div className={cn("col-span-1")}>
              <AmericanLager
                imageUrl={item.imageUrl}
                title={item.title}
                description={item.description}
                text={item.text}
                button={item.button}
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
