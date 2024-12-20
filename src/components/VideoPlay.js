import React from 'react'
import { IoClose } from "react-icons/io5";
import useFetchDetails from '../hooks/useFetchDetails';

function VideoPlay({data, close, media_type}) {
    const {data: videoData} = useFetchDetails(`/${media_type}/${data?.id}/videos`)
    const videoId = videoData?.results.filter(el=>el.name === "Official Trailer").map(el =>el.key).join(", ")

    console.log("VideoPlay : ", videoData)
    console.log(videoId)
  return (
    <section className='fixed bg-neutral-700 top-0 right-0 bottom-0 left-0 
                        z-40 bg-opacity-50 flex justify-center items-center'>
      <div className='bg-black w-full max-w-screen-lg aspect-video 
                        rounded relative max-h-[80vh]'>
        <button onClick={close} className='absolute -right-1 -top-6 text-3xl z-50'>
            <IoClose/>
        </button>
        <iframe
            src={`http://www.youtube.com/embed/${videoId}`}
            className='w-full h-full'
        />
      </div>
    </section>
  )
}

export default VideoPlay