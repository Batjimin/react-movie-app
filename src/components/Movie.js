import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css"

function Movie({ id, coverIMG, title, summary, genres }) {
  return (
    <div>
      <div className={styles.movie}>
        <figure className={styles.imgCover}>
          <div className = {styles.titleCover}>
            <h2 className={styles.movieTitle}>{title}</h2>
          </div>
          <img className={styles.movieIMG} src={coverIMG} alt={title} />
          <detailSection className={styles.detailSection}>
            <Link className={styles.Link} to={`/movie/${id}`}>
              <div className={styles.info}>
              <p>{summary.length>518?`${summary.slice(0,518)}...`:summary}</p>
              <div className={styles.genres}>Genres</div>
                <ul>
                  {genres.map((g) => (
                      <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
            </Link>
          </detailSection>
        </figure>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  coverIMG: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default Movie;

/*npm run deploy!!!*/