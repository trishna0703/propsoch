import React from "react";
import styles from "./PropertyDetail.module.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import PropertyMap from "../PropertyMap/PropertyMap";
import { MapPin } from "lucide-react";

const PropertyDetail = ({ property }) => {
  const { name, images, location, price, amenities, mostLiked } = property;

  return (
    <div className={styles.container}>
      {/* Image Carousel Section */}
      <div className={styles.carouselWrapper}>
        <ImageCarousel images={images} />
        {mostLiked && <div className={styles.badge}>Most Liked</div>}
      </div>

      {/* Property Details Section */}
      <div className={styles.contentWrapper}>
        <div className={styles.headerSection}>
          <div className={styles.propertyInfo}>
            <h1 className={styles.propertyTitle}>{name}</h1>
            <div className={styles.locationWrapper}>
              <MapPin fill="rgba(31, 76, 107, 1)" stroke="#fff" />
              <p className={styles.locationText}>
                {location.city}, {location.country}
              </p>
            </div>
            <h3 className={styles.propertySubtitle}>Location</h3>
            <div className={styles.locationWrapper}>
              <span className={styles.mapPin}>
                <MapPin />
              </span>
              <p className={styles.locationText}>{location.fullAddress}</p>
            </div>
          </div>

          <div className={styles.priceSection}>
            <p className={styles.price}>
              {price.amount} {price.unit}
            </p>
            {price.emiAvailable && (
              <p className={styles.emiText}>EMI Available</p>
            )}
          </div>
        </div>

        {/* Map Section */}
        <div className={styles.mapContainer}>
          <div className={styles.mapPreview}>
            <div className={styles.mapPlaceholder}>
              <PropertyMap location={location.coordinates} icon={images[0]} />
              <p>
                {location.city}, {location.country}
              </p>
            </div>
            <button className={styles.mapButton}>View on Map</button>
          </div>
        </div>

        {/* Amenities Section */}
        <div className={styles.amenitiesSection}>
          <h2 className={styles.amenitiesTitle}>Property Ammenities</h2>
          <div className={styles.amenitiesList}>
            {amenities.map((amenity, index) => (
              <div key={index} className={styles.amenityItem}>
                <p>{amenity.count}</p>
                <p>{amenity.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
