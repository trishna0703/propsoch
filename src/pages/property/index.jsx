import { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import propertiesData from "@/data/properties.json";
import PropertyCard from "@/components/PropertyCard/PropertyCard";
import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import styles from "../../styles/Property.module.css";

const ITEMS_PER_PAGE = 4;

export default function Home() {
  const [properties, setProperties] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const loadProperties = useCallback(() => {
    if (loading) return;
    setLoading(true);

    const nextProperties = propertiesData.properties.slice(
      0,
      (page + 1) * ITEMS_PER_PAGE
    );

    setProperties(nextProperties);
    setPage((prev) => prev + 1);
    setLoading(false);
  }, [loading, page]);

  useEffect(() => {
    if (inView && !loading) {
      setTimeout(() => {
        loadProperties();
      }, 300);
    }
  }, [inView]);

  return (
    <div className={styles.app}>
      <Header />

      <main className={styles.property_list}>
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}

        {loading && (
          <div className={styles.infinitescrollloader}>
            <div className={styles.infinitescrollloader__dots}>
              <div className={styles.infinitescrollloader__dot}></div>
              <div className={styles.infinitescrollloader__dot}></div>
              <div className={styles.infinitescrollloader__dot}></div>
            </div>
          </div>
        )}

        {properties.length < propertiesData.properties.length && !loading && (
          <div ref={ref} className="property_list__loader">
            Loading more properties...
          </div>
        )}
      </main>

      <Navigation />
    </div>
  );
}