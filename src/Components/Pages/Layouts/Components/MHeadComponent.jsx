import React, { useRef , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import PIPIndex from '../../NaxatraComponents/Home/PIPIndex'
import axios from 'axios';
const MHeadComponent = (props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [
        'https://via.placeholder.com/300x250?text=Image+1',
        'https://via.placeholder.com/300x250?text=Image+2',
        'https://via.placeholder.com/300x250?text=Image+3',
      ];
      const nextImage = () => {
        setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1));
      };
    
      const prevImage = () => {
        setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1));
      };
    console.log("incoming media in mukhya component", props?.mediaList)

    const navigate = useNavigate()

    const videoData = {
        "id": 'C13M',
        "tag_name": "stream",
        "media_id": "C13MV",
        "created_date": "21-12-2023",
        "file_name": "https://smartstream.in/naxatra/",
        "media_upload_date": "21-12-2023"
    }
    useEffect(() => {
        const hitApi = async () => {
            try {
                await axios.post('https://live.framework-futuristic.com/api/visitors');
                console.log('API hit successful');
            } catch (error) {
                console.error('Error hitting API:', error);
            }
        };

        hitApi();
    }, []);

    return (
        <>
  {/* <section className="bg-gray-100 py-4 my-4 rounded-lg">
    <p className="text-gray-400 text-lg text-center">Advertisement </p>
  <div className="max-w-4xl mx-auto">
    <div className="bg-[#F7F7F7] p-4 md:p-6 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="relative">
        <img
          src="/images/current.jpg"  // Replace with your actual image path
          alt="Image 1"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="relative mx-2 ">
        <img
          src="/images/current1.jpg"  // Replace with your actual image path
          alt="Image 2"
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="relative mx-2">
        <img
          src="/images/current2.jpg"  // Replace with your actual image path
          alt="Image 3"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  </div>
</section> */}


        <div className={`flex flex-row justify-between items-center flex-wrap-reverse md:flex-wrap w-full h-full text-white `}>
           
                <div className="w-full md:w-[45%] flex flex-col p-2 md:p-2 gap-2  bottom-0 left-0 right-0  ">
{/*  <h1 className='text-lg font-bold cursor-pointer text-slate-50 md:text-2xl md:pt-0 hover:text-red-500' onClick={() => navigate(`/news-details/${props?.data?.story_id}/${props?.data?.category_id}/${props?.data?.category}/${props?.data?.story_title}`)}>
                        {props?.data?.story_title}
                    </h1> */}
                    <a href={`https://naxatranewshindi.com/newsdetails?id=${props?.data?.story_id}`}> 
                    <h1 className='text-lg font-bold cursor-pointer text-slate-50 md:text-2xl md:pt-0 hover:text-red-500'  >
                        {props?.data?.story_title}
                </h1>
                </a>
                    {props?.data?.media_type == 'video' ?
                        <div className='md:p-2 py-8 object-cover w-full md:w-[50%]'>
                            <PIPIndex data={props?.data} className='object-cover md:p-2 ' />
                        </div>
                        :
                        <img src={props?.data?.file_name} alt="" className='md:p-2 bg-contain object-contain w-full  md:w-[50%]' srcSet="" />
                    }

                    <p className={`text-gray-50 ${props?.data?.story_body ? '' : " border-2 h-full "}`}>
                        {!props?.data?.story_body && "Description"}
                        {
                            props?.data?.story_body && <div className="col-span-6 h-[10rem] overflow-auto" dangerouslySetInnerHTML={{ __html: props?.data?.story_body }}></div>
                        }
                    </p>


                </div>

               <div className='h-full object-cover w-full md:w-[50%] md:pt-0 '>
                    {/* <PIPIndex data={props?.mediaList} className='object-cover h-full md:p-2 ' /> */}
                    {/* <PIPIndex data={videoData} className='object-cover h-full md:p-2 ' /> */}
                    <iframe className='w-full h-[250px] md:h-[500px] pt-8  ' src="http://137.97.113.132/hls/main6/playlist.m3u8" title="Naxatra News Live Stream"  ></iframe>
                </div>


        </div>
        </>
    )
}

export default MHeadComponent
