import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'
import { useSelector } from 'react-redux'
import moment from 'moment'
import Divider from '../components/Divider'
import useFetch from '../hooks/useFetch'
import HorizontalScrollCard from '../components/HorizontalScrollCard'
import { useState } from 'react'
import VideoPlay from '../components/VideoPlay'


const DetailsPage = () => {
  const imageURL = useSelector(state => state.movieoData.imageURL)
  const [playVidio, setPlayVidio] = useState(false)
  const [playVidioId, setPlayVidioId] = useState("")
  const params = useParams()

  // console.log(params)

  const { data: filmData } = useFetchDetails(`/${params?.explore}/${params?.id}`)
  const { data: castData } = useFetchDetails(`/${params?.explore}/${params?.id}/credits`)
  const { data: similarData } = useFetch(`/${params?.explore}/${params?.id}/similar`)
  const { data: recommendationData } = useFetch(`/${params?.explore}/${params?.id}/recommendations`)

  const duration = (Number(filmData?.runtime) / 60).toFixed(1).split(".")
  const hendlePlayVidio = (data)=>{
    setPlayVidioId(data)
    setPlayVidio(true)
  }

  return (
    <div>

      <div className='w-full h-[280px] relative hidden lg:block'>
        <div className='w-full h-full'>
          {
            filmData?.backdrop_path ?
              (<img alt='' src={imageURL + filmData?.backdrop_path} className='h-full w-full object-cover' />) :
              (<div className='bg-neutral-800 h-full w-full flex justify-center items-center'>No image found</div>)
          }
        </div>
        <div className='absolute  h-full w-full top-0 bg-gradient-to-t from-neutral-900/90 to-transparent'></div>
      </div>

      <div className='conteiner flex flex-col mx-auto gap-5 px-3 py-16 lg:flex-row lg:gap-10 lg:py-0'>
        <div className='lg:-mt-28 lg:mx-0 relative mx-auto w-fit min-w-60'>
          {
            filmData?.poster_path ?
              (<img alt='' src={imageURL + filmData?.poster_path} className='h-80 w-60 object-cover rounded' />) :
              (<div className='bg-neutral-800 h-80 w-60 flex justify-center items-center rounded'>No image found</div>)
          }
          <button onClick={()=>hendlePlayVidio(filmData)}
                  className='bg-white px-4 py-2 text-black 
                               font-bold rounded mt-4 text-center
                               hover:bg-gradient-to-l w-full
                             from-red-700 to-orange-500
                               shadow-md transition-all
                               hover:scale-105'>
          Play Now
          </button>
        </div>
        <div>
          <h2 className='text-2xl lg:text-4xl font-bold text-white'>{filmData?.title || filmData?.name}</h2>
          <p className='text-neutral-400'>{filmData?.tagline}</p>
        <Divider />
          <div className='flex items-center gap-3 text-center'>
            <p>Rating : {Number(filmData?.vote_average).toFixed(1)}+</p>
            <span>|</span>
            <p>View : {Number(filmData?.vote_count)}</p>
            <span>|</span>
            {
              filmData?.runtime ?
                (<p>Duration : {duration[0]}h,{duration[1]}m</p>) :
                (<p></p>) //Duration : undefined
            }
          </div>
        <Divider />
          <div>
            <h3 className='text-xl font-bold text-white mb-1'>Overview</h3>
            <p>{filmData?.overview}</p>
        <Divider />
            <div className='flex items-center gap-3 my-3 text-center'>
              <p>Status : {filmData?.status}</p>
              <span>|</span>
              <p>Release Data : {moment(filmData?.release_date).format("Do MMMM YYYY")}</p>
              <span>|</span>
              {
              filmData?.revenue ?
                (<p>Revenue : {Number(filmData?.revenue)}$</p>) :
                (<p></p>) //Revenue : NaN
              }
            </div>
        <Divider />
            <div>
              <p><span className='text-white'>Director</span> : {castData?.crew[0]?.name}</p>
              <p><span className='text-white'>Writing</span> : {castData?.crew[1]?.name}</p>
            </div>
          </div>
        <Divider />
          <h2 className='font-bold text-lg'>Cast :</h2>
          <div className='grid grid-cols-[repeat(auto-fit,96px)] lg:gap-5 gap-3'>
            {
              castData?.cast?.filter(el => el?.profile_path).map((cast, index)=>{
                return(
                  <div key={castData.cast.id}>
                    <div>
                      <img alt=''
                        src={imageURL+cast?.profile_path}
                        className='w-24 h-24 object-cover rounded-full'
                      />
                    </div>
                    <p className='font-bold text-center text-sm text-neutral-400'>{cast?.name}</p>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>

      <div>
        <HorizontalScrollCard data={similarData} heading={"Similar "+ params?.explore} media_type={params?.explore}/>
        <HorizontalScrollCard data={recommendationData} heading={"Recommendation "+ params?.explore} media_type={params?.explore}/>
      </div>

      {
        playVidio &&(
          <VideoPlay data={playVidioId} key={playVidioId} close={()=>setPlayVidio(false)} media_type={params?.explore}/>
        )
      }
    </div>
  )
}

export default DetailsPage