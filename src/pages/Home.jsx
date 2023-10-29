import React, { useEffect, useState } from 'react'
import movies from '../data';
import Header from '../components/Header';
import { BsSearch } from 'react-icons/bs'

const Home = () => {

    const [movieData, setMovieData] = useState([]);

    const [searchMovie, setSearchMovie] = useState("");

    useEffect(() => {

        const fetchMovie = async () => {
            setMovieData(movies)
        }
        fetchMovie();
    }, [])

    const goMovie = (id) => {
        window.location = `detail/${id}`
    }

    const silenceFilm = () => {
        window.location = `detail/26`
    }

    return (

        <div>
            <div className='bg-black'>

                <Header />


                {/* Banner */}
                <div className='flex lg:relative w-full h-auto lg:h-banner-height mb-10 lg:mb-28 bg-banner bg-no-repeat bg-cover text-white'>
                    <div className='w-4/6 h-4/5 lg:absolute bottom-10 flex flex-col justify-center ml-0 lg:ml-20 px-5 py-4 group'>
                        <h1 className='lg:text-5xl mb-5 lg:mb-10'>THE SILENCE OF THE LAMBS</h1>
                        <p className='text-sm lg:w-2/3 lg:text-xl mb-10'>A young F.B.I. cadet must confide in an incarcerated and manipulative killer to receive his help on catching another serial killer who skins his victims.</p>
                        <button className='opacity-100 lg:opacity-0 w-28 lg:w-48 text-sm lg:text-xl text-center rounded py-1 lg:py-3 bg-black text-header-bottom font-bold hover:cursor-pointer hover:bg-header-bottom hover:text-white duration-300 group-hover:opacity-100 banner-btn' onClick={silenceFilm}>DETAIL</button>
                    </div>
                </div>


                <div className='search-btn-and-movies flex flex-col container mx-auto '>
                    {/* Search Part */}
                    <div className='flex flex-col lg:flex-row justify-between items-center mb-14 text-white'>
                        <p className='ml-0 lg:ml-6 text-2xl lg:text-3xl mb-10 lg:mb-0'>All Movies</p>
                        <div className='flex justify-between items-center bg-white rounded-3xl px-11 py-3 mr-0 lg:mr-14'>
                            <input type="text" placeholder='Search a Movie' className='text-black outline-0' onChange={(e) => setSearchMovie(e.target.value)} />
                            <BsSearch color='black' />
                        </div>
                    </div>


                    {/* All Movies */}
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start lg:flex-wrap w-full container mx-auto max-w-7xl'>

                        {
                            movieData.filter((movie) => {
                                if (searchMovie == "") {
                                    return movie;
                                } else if (movie.title.toLocaleLowerCase().includes(searchMovie.toLocaleLowerCase())) {
                                    return movie;
                                }
                            }).map((movie) => (
                                <div key={movie.id} className='w-52 h-80 flex flex-col  m-5 group relative hover:cursor-pointer' onClick={() => goMovie(movie.id)}>
                                    <img src={movie.posterUrl} alt='' className='h-full w-full' />
                                    <div className='opacity-0 absolute bottom-0 h-auto flex flex-col items-center text-center bg-black text-white w-full px-1 py-4 group-hover:opacity-90 duration-500'>
                                        <div className='font-bold'>
                                            {movie.title}
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home
