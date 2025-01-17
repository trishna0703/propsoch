import { useState, useRef } from "react";
import styles from "./ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStart = useRef(0);
  const touchEnd = useRef(0);

  const handleTouchStart = (e) => {
    touchStart.current = e.targetTouches[0].clientX;
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStart.current - touchEnd.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0 && currentIndex < images.length - 1) {
        setCurrentIndex((prev) => prev + 1);
      } else if (diff < 0 && currentIndex > 0) {
        setCurrentIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div
      className={styles.image_carousel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className={styles.image_carousel__track}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className={styles.image_carousel__slide}>
            <img src={src} alt={`Property view ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className={styles.image_carousel__indicators}>
        {images.map((_, index) => (
          <button
            key={index}
            className={`${styles.image_carousel__indicator} ${
              index === currentIndex
                ? styles.image_carousel__indicator_active
                : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentIndex(index);
            }}
          ></button>
        ))}
      </div>
    </div>
  );
}
