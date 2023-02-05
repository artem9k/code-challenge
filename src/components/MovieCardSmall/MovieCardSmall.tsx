import Link from 'next/link'
import styles from '@/styles/MovieCardSmall.module.scss'
import { Movie } from '@/util/util'

// the index page will have MovieCardSmall, the movie page will have MovieCardLarge
const MovieCardSmall = (props: any) => {
    const movie: Movie = props.movie
    return (
        <div className={styles.movie_card_small_wrap}>
            <Link href={'/movies/' + movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} className={styles.movie_card_img} width={'200px'} height={'300px'}/>
            <div className={styles.text_box} >
                <div className={styles.imdb_rating}>
                    <p>⭐ {movie.imdbRating}</p>
                </div>
                <div className={styles.title}>
                    <p>{movie.Title}</p>
                </div>
                <div className={styles.year_rating}>
                    <p className={styles.movie_year}>{movie.Year}</p>
                    <p className={styles.movie_rating}>{movie.Rated}</p>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default MovieCardSmall;

