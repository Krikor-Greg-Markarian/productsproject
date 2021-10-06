import Head from "next/head";
import Image from "next/image";
import AngiesResult from "../Src/Componnets/AngiesResult";
import OrganicProduct from "../Src/Componnets/OrganicProduct";
import styles from "../styles/Home.module.css";
import cn from "classnames";
import ResultAmericanLager from "../Src/Componnets/ResultAmericanLager";

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
        <AngiesResult
          items={[
            {
              imageUrl:
                "https://cdn.pixabay.com/photo/2016/11/14/04/25/umbrella-1822586__340.jpg",
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
          ]}
        />
      </section>

      <section className={cn("pt-5")}>
        <ResultAmericanLager
          items={[
            {
              imageUrl:
                "https://cdn.pixabay.com/photo/2016/06/30/12/29/carnation-1488929__340.jpg",
              title: "American Lager",
              description: "Real Good Boy",

              text: "For far away, behind the word mountains, far from the countries",
              button: "purchase today",
            },
          ]}
        />
      </section>
    </div>
  );
}
