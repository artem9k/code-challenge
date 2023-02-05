import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Header, Content, Footer } from '@/components/Content/Content'
import { Movie } from '@/util/util'

export default function Home() {

    const [titles, setTitles] = useState<string[]>([])
    const [movies, setMovies] = useState<Movie[]>([])

    useEffect(() => {
        var storedMovies = null
        if (movies.length == 0) {
            storedMovies = localStorage.getItem('movies')
            if (storedMovies != null) {
                setMovies(JSON.parse(storedMovies))
            }
        }

        if (titles.length == 0 && movies.length == 0 && storedMovies == null) {
        fetch('/top250.txt')
        .then(response => response.text())
        .then(data => {
            const data_list = data.split("\n")
            var titles: string[] = []
            for (let i = 0; i < data_list.length; i++) {
                var content = data_list[i]
                var words = content.split(" ")
                var words = words.slice(13, words.length - 1)
                var title = words.join(" ")
                if (title[0] == " ") {
                    title = title.slice(1)
                }
                titles = [...titles, title]
            } 
            setTitles(titles)
        }
        )
        .catch(error => console.log(error))
        }

        if (titles.length > 0 && movies.length == 0) {
            loadMovies()
        }

        if (movies.length > 0) {
            localStorage.setItem('movies', JSON.stringify(movies))

            for(let i = 0; i < movies.length; i++) {
                const movie = movies[i]
                localStorage.setItem(movie.imdbID, JSON.stringify(movie))
            }
        }
    })

    const loadMovies = async () => {
        var movies: Movie[] = []
        for (let i = 0; i < 11; i++) {
            const response = await fetch(`https://www.omdbapi.com/?apikey=1ff2b957&t=${titles[i]}`)
            const data = await response.json()
            if (data.Response == "False") {
                continue
            }
            const movie: Movie = data
            movies = [...movies, movie]
        }
        setMovies(movies)
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
            <Content movies={movies}/>
            <Footer />
        </div>
      </main>
    </>
  )
}
