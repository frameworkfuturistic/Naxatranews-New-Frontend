import React, { useEffect, useRef, useState } from "react";
import './style.css'
import Video from "./Video";
import VideoIndex from "./VideoIndex";
import axios from 'axios';
const HomeLayout = (props) => {

  const [isPiPMode, setIsPiPMode] = useState(false);
  // State to track the currently playing video
  const [currentVideo, setCurrentVideo] = useState(null);

  // Function to handle playing/pausing a video
  const handlePlay = (source) => {
    setCurrentVideo(source);
  };

  const videoRef = useRef(null);

  const handleEnterPiPMode = () => {
    if (videoRef.current && document.pictureInPictureEnabled) {
      videoRef.current.requestPictureInPicture().catch((error) => {
        console.error("Failed to enter PiP mode:", error);
      });
      setIsPiPMode(true);
    }
  };

  const handleExitPiPMode = () => {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture().catch((error) => {
        console.error("Failed to exit PiP mode:", error);
      });
      setIsPiPMode(false);
    }
  };

  // const handlePlayVideo = () => {
  //   // Pause the currently playing video before starting a new one
  //   if (currentVideo !== data.source) {
  //     setCurrentVideo(data.source);
  //     onPlay(data.source);
  //   } else if (isPlaying) {
  //     onPlay(null); // Pause the video
  //     setCurrentVideo(null);
  //   } else {
  //     onPlay(data.source);
  //     setCurrentVideo(data.source);
  //   }

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      };

      const handleIntersection = (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsPiPMode(false);
          } else if (!isPiPMode) {
            // It's important to call handleEnterPiPMode within a user gesture
            // Here, we're using the Intersection Observer callback
            handleEnterPiPMode();
          }
        });
      };

      const observer = new IntersectionObserver(handleIntersection, options);
      observer.observe(videoElement);

      return () => {
        observer.disconnect();
      };
    }
  }, [props?.data?.rightMenu?.source, isPiPMode]);

 


  
  return (
    <>
     <section className="bg-gray-100 py-4 my-4 rounded-lg">
    <p className="text-gray-400 text-2xl text-center">Advertisement </p>
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
</section>
      <div
        className={`h-full w-full grid grid-cols-12 gap-8 md:px-4 p-2 py-4 mb-6 border-b ${props?.index % 2 == 0 && 'bg-zinc-50 shadow-sm border-t'}`} 
        >
        {props?.data?.news?.header && (
          <header className="w-full col-span-12 border-t border-b">
            <span className="block pt-2 pb-2 font-semibold border-t-4 border-red-600 w-max">
              {props?.data?.news?.header}
            </span>
          </header>
        )}

        <div className="flex flex-col col-span-12 md:col-span-4">
          <img
            src={props?.data?.news?.source}
            alt="Image"
            srcSet=""
            className="w-full border h-60"
          />

          <div className="py-2 text-zinc-700">
            <span className="text-xl font-semibold cursor-pointer line-clamp-2 text-ellipsis hover:text-red-500" onClick={() => props?.getFun(props?.data?.news?.id, props?.index)}>
              {props?.data?.news?.heading}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>{props?.data?.news?.author}</span>
            <span>{props?.data?.news?.date}</span>
          </div>

          <div className="text-sm text-gray-500 line-clamp-2 text-ellipsis">
            {props?.data?.news?.content}
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 flex flex-col gap-6 md:h-[55vh]">

          <header className="w-full col-span-12 border-t border-b">
            <span className="block pt-2 pb-2 font-semibold border-t-4 border-red-600 w-max">
              You May Also Like
            </span>
          </header>

          <div className="overflow-y-auto">
            {props?.data?.news?.map((elem) => (
              <>
                <div className="grid items-center grid-cols-12 gap-4 pb-1 mb-2 border-b">
                    <img
                      src={elem?.image}
                      alt="image"
                      srcSet=""
                      className="object-cover w-full col-span-4 bg-cover border h-14"
                    />
                  <div className="flex flex-col col-span-8 gap-1">
                    <span className="text-sm cursor-pointer text-zinc-800 hover:text-red-500" onClick={() => props?.getFun(elem?.id, props?.index)}>
                      {elem?.heading}
                    </span>
                    <span className="text-sm text-zinc-500">{elem?.date}</span>
                  </div>
                </div>
              </>
            ))}
          </div>

        </div>

        <div className="flex flex-col col-span-12 md:col-span-4">

          {props?.data?.news[props?.data?.news?.length - 1]?.header && (
            <header className="w-full col-span-12 border-t border-b">
              <span className="block pt-2 pb-2 font-semibold border-t-4 border-red-600 w-max">
                {props?.data?.news[props?.data?.news?.length - 1]?.header}
              </span>
            </header>
          )}


          {props?.data?.news[props?.data?.news?.length - 1]?.type == 'video'
            ?
            <>

              <VideoIndex
                data={props?.data}
              />
            </>
            :
            <img
              src={props?.data?.news[props?.data?.news?.length - 1]?.image}
              alt="Image"
              srcSet=""
              className="w-full border h-60"
            />}

          <div className="py-2 text-zinc-700">
            <span className="text-xl font-semibold cursor-pointer line-clamp-2 text-ellipsis hover:text-red-500" onClick={() => props?.getFun(props?.data?.news[props?.data?.news?.length - 1]?.id, props?.index)}>
              {props?.data?.news[props?.data?.news?.length - 1]?.heading}
            </span>
          </div>

          <div className="flex justify-between text-sm text-gray-500">
            <span>{props?.data?.news[props?.data?.news?.length - 1]?.author}</span>
            <span>{props?.data?.news[props?.data?.news?.length - 1]?.date}</span>
          </div>

          <div className="text-sm text-gray-500 line-clamp-2 text-ellipsis">
            {props?.data?.news[props?.data?.news?.length - 1]?.content}
          </div>
        </div>

      </div>
    </>
  );
};

export default HomeLayout;
