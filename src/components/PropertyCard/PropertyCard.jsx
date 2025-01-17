import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleWishlist } from "../../store/slices/wishlistSlice";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import styles from "./PropertyCard.module.css";

export default function PropertyCard({
  id,
  name,
  views,
  rating,
  period,
  images,
  mostLiked,
  location,
}) {
  const router = useRouter();
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.items);
  const isWishlisted = wishlist.includes(id);

  const handleClick = () => {
    router.push(`/property/${id}`);
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    dispatch(toggleWishlist(id));
  };

  return (
    <div className={styles.property_card} onClick={handleClick}>
      <div className={styles.property_card__image_container}>
        <ImageCarousel images={images} />
        {mostLiked && (
          <span className={styles.property_card__badge}>Most Liked</span>
        )}
        <button
          className={styles.property_card__wishlist}
          onClick={handleWishlist}
        >
          <input
            type="checkbox"
            checked={isWishlisted}
            onChange={handleWishlist}
            className={styles.heart_checkbox}
            id={`heart-checkbox-${id}`}
          />
          <label htmlFor={`heart-checkbox-${id}`} className={styles.heart}>
            &#10084;
          </label>
        </button>
      </div>

      <div className={styles.property_card__content}>
        <div className={styles.property_card__stats}>
          <span className={styles.property_card__views}>
            {views.toLocaleString()}
          </span>
          <span
            className={`${styles.property_card__rating} ${
              rating > 4
                ? styles.property_card__rating_good
                : rating < 3
                ? styles.property_card__rating_bad
                : styles.property_card__rating
            } `}
          >
            {rating}
          </span>
        </div>
        <h2 className={styles.property_card__title}>{name}</h2>
        <div className={styles.property_card__footer}>
          <span className={styles.property_card__period}>{period}</span>
          <span
            className={styles.property_card__location}
          >{`${location.city}, ${location.country}`}</span>
        </div>
      </div>
    </div>
  );
}
