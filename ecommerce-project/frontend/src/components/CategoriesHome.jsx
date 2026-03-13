import React from "react";
import { categoriesHomeStyles } from "../assets/dummyStyles";
import brands from "../assets/CategoriesHomedata";
import { Link } from "lucide-react";
import { useState } from "react";

const CategoriesHome = () => {
  const [hoveredBrand, setHoveredBrand] = useState(null);
  return (
    <section className={categoriesHomeStyles.section}>
      <div className={categoriesHomeStyles.container}>
        <header
          className={categoriesHomeStyles.header}
          style={categoriesHomeStyles.playfairFont}
        >
          <h1
            className={categoriesHomeStyles.h1}
            style={categoriesHomeStyles.h1FontSize}
          >
            <span className={categoriesHomeStyles.h1SpanRegular}>
              Premium Watch
            </span>
            <span className={categoriesHomeStyles.h1SpanAccent}>Brands</span>
          </h1>
          <div className={categoriesHomeStyles.underline}></div>
          <p className={categoriesHomeStyles.subtext}>
            Dicover the world's most prestigious watchmakers - curated picks for
            every style.
          </p>
        </header>

        {/* CARD */}

        <div
          className={categoriesHomeStyles.grid}
          style={categoriesHomeStyles.playfairFont}
        >
          {brands.map((brand) => (
            <Link
              key={brand.id}
              to={brand.link}
              className={categoriesHomeStyles.cardLink}
              onMouseEnter={() => setHoveredBrand(brand.id)}
              onMouseLeave={() => setHoveredBrand(null)}
            >
              <div className={categoriesHomeStyles.cardWrapper}>
                <div className={categoriesHomeStyles.imageContainer}>
                  <img
                    src={brand.image}
                    alt={brand.name}
                    loading="lazy"
                    className={categoriesHomeStyles.image}
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategoriesHome;
