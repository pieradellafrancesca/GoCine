import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../../context";
import { GET_IMAGES, GET_REVIEWS } from "../../utils/https";

import {
  MdOutlineKeyboardArrowRight,
  MdOutlineStarPurple500,
} from "react-icons/md";
import styles from "./index.module.scss";

export default function Reviews() {
  const { state, dispatch } = useContext(Context);
  const [reviews, setReviews] = useState([]);
  const [fullReviews, setFullReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [movieBackDrop, setMovieBackDrop] = useState([]);

  useEffect(() => {
    if (state.movieID || state.nowPlaying[0]?.id) {
      GET_IMAGES(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ backdrops }) => {
          if (backdrops) {
            setMovieBackDrop(backdrops[4] ? backdrops[4] : backdrops[0]);
          }
        }
      );

      GET_REVIEWS(state.movieID ? state.movieID : state.nowPlaying[0]?.id).then(
        ({ results }) => {
          setReviews(results.slice(0, 2));
          setFullReviews(results);
          const positive = results.filter(
            (item) => item.author_details.rating > 5
          );
          const negative = results.filter(
            (item) => item.author_details.rating <= 5
          );

          setRatings({ positive, negative });
        }
      );
    }
  }, [state.movieID, state.nowPlaying]);

  return (
    <section className={styles.Reviews}>
      <div className={styles.imgWrapper}>
        <div className={styles.overlay}></div>
        {movieBackDrop.file_path && (
          <img
            src={`https://image.tmdb.org/t/p/original/${movieBackDrop.file_path}`}
            alt="backdrop"
            loading="lazy"
          />
        )}
      </div>

      <div className={styles.review}>
        <div className={styles.cardListNav}>
          <h4 className={styles.navListTitle}>
            Review <span>{fullReviews?.length} reviews</span>
          </h4>
        </div>

        <div className={styles.reviewList}>
          {reviews?.map((item, i) => {
            return (
              <div className={styles.reviewCard} key={i}>
                <div className={styles.authorInfo}>
                  <div className={styles.header}>
                    <h5>{item.author}</h5>
                    <span>{item.created_at.substring(0, 10)}</span>
                  </div>
                  <p>
                    {item.author_details.rating}/10 <MdOutlineStarPurple500 />
                  </p>
                </div>
                <hr />
                <div className={styles.fade}>
                  <p>{item.content}</p>
                </div>

                <Link>
                  see full review <MdOutlineKeyboardArrowRight />
                </Link>
              </div>
            );
          })}
          <div className={styles.seeMore}>
            <div className={styles.text}>
              <h3>{fullReviews?.length} reviews</h3>
              <div className={styles.ratings}>
                <span>
                  <MdOutlineStarPurple500 /> {ratings.positive?.length} positive
                </span>
                <span>
                  <MdOutlineStarPurple500 /> {ratings.negative?.length} negative
                </span>
              </div>
            </div>
            <Link className={styles.btn}>see all reviews</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
