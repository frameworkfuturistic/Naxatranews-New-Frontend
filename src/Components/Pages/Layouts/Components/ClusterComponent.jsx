import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import VideoIndex from '../../NaxatraComponents/Home/VideoIndex'
import AssignNews from '../../NaxatraComponents/Home/AssignNews'

const ClusterComponent = (props) => {

    const [width, setWidth] = useState('w-full md:w-full')
    const [container, setContainer] = useState('w-full')

    const navigate = useNavigate()

    useEffect(() => {
        switch (props?.split) {
            case '1': {
                setWidth('w-full md:w-[calc(100%/1.2)]')
                setContainer('w-[100%*1]')
            } break;
            case '2': {
                setWidth('w-full md:w-[calc(100%/2.2)]')
                setContainer('w-[100%*2]')
            } break;
            case '3': {
                setWidth('w-full md:w-[calc(100%/3.2)]')
                setContainer('w-[100%*3]')
            } break;
            case '4': {
                setWidth('w-full md:w-[calc(100%/4.2)]')
                setContainer('w-[100%*4]')
            } break;
            case '5': {
                setWidth('w-full md:w-[calc(100%/5.2)]')
                setContainer('w-[100%*5]')
            } break;
            default : {
                setWidth('w-full md:w-[calc(100%/3.2)]')
                setContainer('w-[100%*3]')
            } break;
        }
    }, [props?.split])

    console.log(props?.data)


    return (

                    <>
                        <div className={`w-full md:w-[calc(100%/3.2)] grid grid-cols-12 border-t border-gray-300 p-2 relative`} >

                            <AssignNews data={props?.data} code={props?.code} storyList={props?.storyList}  cId={props?.cId} cname={props?.cname} />

                            {props?.data?.file_name != ""  &&
                            <>{
                            props?.data?.media_type == 'video' ?
                                <div className='col-span-4 object-contain mx-2 bg-contain h-16'>
                                    <VideoIndex data={props} className='p-2 h-full object-cover' />
                                </div>
                                :
                                <img src={props?.data?.file_name} alt="Image" srcSet="" className='col-span-4  bg-contain object-contain h-16' />
                                
                            }</>
                            }

                            {
                                props?.data?.file_name == "" && 
                                <div className='bg-slate-500 h-full flex justify-center items-center'>
                                    Media
                                </div>
                            }

                            <div className="col-span-8">
                            {/*   <h1 className={`hover:text-red-500 text-ellipsis line-clamp-3 font-semibold text-gray-700 text-sm cursor-pointer ${props?.data?.story_title ? '' : 'h-full flex justify-center items-center border-2'}`}  onClick={() => navigate(`/news-details/${props?.data?.story_id}/${props?.data?.category_id}/${props?.data?.category}/${props?.data?.story_title}`)}>
                                    {props?.data?.story_title ?? "Heading"}
                                </h1>*/}
                                <a href={`https://naxatranewshindi.com/newsdetails?id=${props?.data?.story_id}`}> 
                                <h1 className={`hover:text-red-500 text-ellipsis line-clamp-3 font-semibold text-gray-700 text-sm cursor-pointer ${props?.data?.story_title ? '' : 'h-full flex justify-center items-center border-2'}`}  onClick={() => navigate(`/news-details/${props?.data?.story_id}/${props?.data?.category_id}/${props?.data?.category}/${props?.data?.story_title}`)}>
                                    {props?.data?.story_title ?? "Heading"}
                                </h1>
                                </a>
                            </div>

                        </div>
                    </>
                
    )
}

export default ClusterComponent