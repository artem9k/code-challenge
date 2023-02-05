import styles from '@/styles/Content.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Movie } from '@/util/util'
import MovieCardSmall from '@/components/MovieCardSmall/MovieCardSmall'
import MovieCardLarge from '@/components/MovieCardLarge/MovieCardLarge'

const Header = () => {
    return (
        <div className={styles.header_wrap}>
            <Link href='/'>
                <Image src='/miniflix.png' alt='Miniflix' width={200} height={50} />
            </Link>
        </div>
    )
}

const Content = (props: any) => {
    return (
    <div className={styles.content_background}>
        <div className={styles.content_wrap}>
            <div className={styles.content_list}>
                {props.movies.map((movie: Movie, index: any) => {
                    return <MovieCardSmall movie={movie} key={'movie_card_' + index}/>
                })}
            </div>
        </div>
    </div>
    )
}

const MovieContent = (props: any) => {
    return (
        <div className={styles.content_background}>
        <div className={styles.content_wrap}>
            <div className={styles.movie_content}>
            {props.movie ? <MovieCardLarge movie={props.movie} /> : <></>}
        </div>
        </div>
    </div>
    )
}


const Footer = () => {
    return <></>
}

export {
    Header,
    Content,
    MovieContent,
    Footer
}
