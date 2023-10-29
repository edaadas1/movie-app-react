import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import movies from '../data';
import { AiFillHeart } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();

    console.log('id', id)

    const [movieData, setMovieData] = useState([]);
    const [liked, setLiked] = useState(false);
    const [likedMovieList, setLikedMovieList] = useState([]);

    useEffect(() => {

        const fetchMovie = async () => {
            setMovieData(movies)
        }
        fetchMovie();

    }, [])


    return (
        <div className='bg-black h-auto lg:h-screen'>
            <Header />

            {
                movieData.filter(movie => movie.id == id).map((moviedt) => (
                    <div key={moviedt.id} className='flex flex-col items-center lg:items-start lg:flex-row container mx-auto w-full px-5 lg:px-14 py-5 text-white mt-20'>

                        <div className='flex flex-col flex-1 justify-evenly order-2 lg:order-1'>
                            <div className='flex items-center mb-5'>
                                <p className='mr-6 text-4xl'>{moviedt.title}</p>
                                <p className='text-4xl mr-6'>{moviedt.year}</p>
                                <div>
                                    <AiFillHeart size={30} onClick={() => setLiked(!liked)} color={(liked === true) ? 'red' : 'white'} className='hover:cursor-pointer' />
                                </div>
                            </div>
                            <div><p className='text-red-500 mb-5 '>{moviedt.genres}</p></div>
                            <div className='flex items-center mb-5'><p className='mr-3 font-bold lg:text-lg'>Movie Director :</p><p>{moviedt.director}</p></div>
                            <div className='flex mb-5 '><p className='mr-5 font-bold lg:text-lg'>Movie Actors :</p><p>{moviedt.actors}</p></div>
                            <div className='flex lg:w-2/3 mb-5 lg:mb-0 '><p className='lg:whitespace-nowrap mr-10 font-bold lg:text-lg'>Movie Plot :</p><p>{moviedt.plot}</p></div>
                        </div>

                        <div className='flex-2 order-1 lg:order-2 mb-16 lg:mb-0'>
                            <img className='flex h-detail-img-height' src={moviedt.posterUrl} alt='' />
                        </div>

                    </div>
                ))
            }



        </div>
    )
}

export default Detail
