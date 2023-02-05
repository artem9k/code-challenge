import { Movie } from "@/util/util";
import styles from '@/styles/MovieCardLarge.module.scss';

// the index page will have MovieCardSmall, the movie page will have MovieCardLarge
const MovieCardLarge = (props: any) => {
    const movie: Movie = props.movie
    return (
        <div className={styles.card}>
            <img className={styles.movie_img} src={movie.Poster} alt={movie.Title} />
            <div className={styles.text_box}>
                <div className={styles.max_width}> 
                    <div className={styles.title}>
                        <h1>{movie.Title}</h1>
                    </div>
                    <div className={styles.year_rating}>
                        <p className={styles.movie_imdb_ratnig}>⭐ {movie.imdbRating}</p>
                        <p className={styles.movie_year}>{movie.Year}</p>
                        <p className={styles.movie_rating}>{movie.Rated}</p>
                    </div>

                    <div className={styles.plot}>
                        <p>{movie.Plot}</p>
                    </div>

                    <div className={styles.language}>
                        <div className={styles.language_div}>
                            <hr></hr>
                            <span>
                                <p className={styles.lang_left}>Languages: </p>
                                <p className={styles.lang_right}>{movie.Language}</p>
                            </span>
                        </div>
                    </div>

                    <div className={styles.genre}>
                        <div className={styles.genre_div}>
                            <hr></hr>
                            <span>
                                <p className={styles.genre_left}>Genre: </p>
                                <p className={styles.genre_right}>{movie.Genre}</p>
                            </span>
                        </div>
                    </div>

                    <div className={styles.director}>
                        <div className={styles.director_div}>
                            <hr></hr>
                            <span>
                                <p className={styles.director_left}>Director: </p>
                                <p className={styles.director_right}>{movie.Director}</p>
                            </span>
                        </div>
                    </div>
                    <div className={styles.actors}>
                        <div className={styles.actors_div}>
                            <hr></hr>
                            <span>
                                <p className={styles.actors_left}>Actors: </p>
                                <p className={styles.actors_right}>{movie.Actors}</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCardLarge;
