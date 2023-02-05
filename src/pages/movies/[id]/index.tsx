import Head from 'next/head'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {Header, MovieContent, Footer} from '@/components/Content/Content'
import { Movie } from '@/util/util'

export default function Movies() {
    const router = useRouter()
    const { id } = router.query
    const [movie, setMovie] = useState<Movie>()
    const [movieSet, setMovieSet] = useState(false)

    useEffect(() => {
        if (!movieSet && id != undefined) {
            const storedMovie = localStorage.getItem(id as string)
            if (storedMovie != null) {
                setMovie(JSON.parse(storedMovie))
                setMovieSet(true)
            }
            else {
                loadMovie()
            }
        }
    })

    const loadMovie = async () => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=1ff2b957&i=${id}`)
        const data = await response.json()
        if (data.Response == "False") {
            console.log('false response')
        }
        setMovie(data)
        setMovieSet(true)
    }

  return (
    <>
      <Head>
        <title>Fake Netflix</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
            <Header />
            <MovieContent movie={movie}/>
            <Footer />
        </div>
      </main>
    </>
  )
}
