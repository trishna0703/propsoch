import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import PropertyDetail from "@/components/PropertyDetail/PropertyDetail";
import propertiesData from "@/data/properties.json";
import { useRouter } from "next/router";
import styles from "../../styles/Property.module.css";

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;
  const property = propertiesData.properties.find((p) => p.id == id);

  if (!property) {
    return "Property Not Found";
  }

  return (
    <div className={styles.app}>
      <Header />
      <PropertyDetail property={property} />
      <Navigation />
    </div>
  );
}
