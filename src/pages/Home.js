import React from 'react';
import BannerHome from '../components/BannerHome';
import { useSelector } from 'react-redux';
import HorizontalScrollCard from '../components/HorizontalScrollCard';
import useFetch from '../hooks/useFetch';


const Home = () => {
  const trandingMovie = useSelector(state => state.movieoData.bannerData)
  const {data : nowPlyaingData} = useFetch('/movie/now_playing')
  const {data : topRatedData} = useFetch('/movie/top_rated')
  const {data : popularTvShowData} = useFetch('/tv/popular')
  const {data : topRatedShowData} = useFetch('/tv/top_rated')


  return (
    <div>
      <BannerHome />
      <HorizontalScrollCard data={trandingMovie} heading={"Trending Show"} trending={true}/> 
      <HorizontalScrollCard data={nowPlyaingData} heading={"Now Playing"} media_type={"movie"}/>
      <HorizontalScrollCard data={topRatedData} heading={"Top Rated Movies"} media_type={"movie"}/>
      <HorizontalScrollCard data={popularTvShowData} heading={"Popular TV Show"} media_type={"tv"}/>
      <HorizontalScrollCard data={topRatedShowData} heading={"Top Rated Show"} media_type={"tv"}/>
    </div>
  )
}

export default Home