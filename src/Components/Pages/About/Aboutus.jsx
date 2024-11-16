import React from 'react';
import NewsCategoriesIndex from "../NaxatraComponents/NewsCategories/NewsCategoriesIndex"
import Footerlayout from "../NaxatraComponents/Footer/Footerlayout"
const AboutUs = () => {
  return (
    <div className='m-10 ml-auto '>
    <NewsCategoriesIndex  />
    <div className="container px-4 py-8 mx-auto ">
     
    
      <h1 className="my-2 mb-8 text-4xl font-bold text-center text-red-500 ">About Naxatranewshindi</h1>

      {/* First Section: Half Image and Content */}
      <div className="flex flex-col mb-8 md:flex-row">
        <div className="mb-4 md:w-1/2 md:mb-0">
          <img src="images/undefined - Imgur.png" alt="Image" className="w-full h-auto rounded-lg" />
        </div>
        <div className="md:w-1/2 md:pl-8 my-12 mx-8">
          <h2 className="mb-4 text-2xl font-bold underline" style={{color:"#7c0000"}}>नक्सात्रा न्यूज़ हिंदी में आपका स्वागत है</h2>
          <p className="leading-relaxed text-gray-700">नक्सात्रा न्यूज़ हिंदी में, भारत और दुनिया भर से समाचारों के नवीनतम अपडेट और व्यावहारिक कवरेज के लिए आपके विश्वसनीय स्रोत, नक्सात्रा न्यूज़ हिंदी में आपका स्वागत है।</p>
          <p className="leading-relaxed text-gray-700 my-2 ">नक्सात्रा न्यूज़ हिंदी में, हम ऐसी खबरें देने में गर्व महसूस करते हैं जो न केवल वर्तमान हैं बल्कि हमारे विविध दर्शकों के लिए विश्वसनीय और प्रासंगिक भी हैं। पत्रकारों की हमारी समर्पित टीम आप तक सबसे सटीक और नवीनतम जानकारी पहुंचाने के लिए अथक प्रयास करती है, यह सुनिश्चित करते हुए कि आप उन घटनाओं और विकासों के बारे में सूचित रहें जो सबसे महत्वपूर्ण हैं।</p>
          <p className="leading-relaxed text-gray-700 my-2 ">हिंदी में समाचार देने पर ध्यान देने के साथ, हमारा उद्देश्य व्यापक दर्शकों के लिए जानकारी को सुलभ बनाना, भाषा की बाधाओं को दूर करना और हमारे हिंदी भाषी दर्शकों को उनके आसपास की दुनिया से जुड़े रहने के लिए एक मंच प्रदान करना है। हिंदी में समाचार देने की हमारी प्रतिबद्धता समावेशिता के प्रति हमारे समर्पण और भाषाई विविधता के महत्व की हमारी मान्यता को दर्शाती है।</p>
          <p className="leading-relaxed text-gray-700 my-2 ">
          हम आज की तेज़-तर्रार दुनिया में सूचित रहने के महत्व को समझते हैं, यही कारण है कि हम राजनीति, व्यवसाय, प्रौद्योगिकी, मनोरंजन, खेल और अन्य सहित कई विषयों पर व्यापक कवरेज प्रदान करने का प्रयास करते हैं। चाहे आप स्थानीय मुद्दों या वैश्विक मामलों में रुचि रखते हों, आपको सूचित और व्यस्त रखने के लिए आप नक्सात्रा न्यूज़ हिंदी पर भरोसा कर सकते हैं।</p>
          <p className="leading-relaxed text-gray-700 my-2 ">
          नक्सात्रा न्यूज़ हिंदी में, हम मानते हैं कि हम जो कुछ भी करते हैं उसके केंद्र में हमारे दर्शक हैं। इसीलिए हम लगातार सुधार और नवप्रवर्तन के लिए प्रयासरत हैं, अपने दर्शकों से प्रतिक्रिया मांग रहे हैं और उनकी बढ़ती जरूरतों को पूरा करने के लिए खुद को ढाल रहे हैं। चाहे हमारी वेबसाइट, मोबाइल ऐप या सोशल मीडिया चैनलों के माध्यम से, हम एक सहज और आकर्षक उपयोगकर्ता अनुभव प्रदान करने के लिए प्रतिबद्ध हैं जो आपको कहीं भी कनेक्टेड और सूचित रखता है।</p>
          <p className="leading-relaxed text-gray-700 my-2 ">
          जैसा कि हम महत्वपूर्ण समाचार देने के अपने मिशन पर आगे बढ़ रहे हैं, हम आपको इस यात्रा में शामिल होने के लिए आमंत्रित करते हैं। नवीनतम अपडेट, व्यावहारिक विश्लेषण और हमारी दुनिया को आकार देने वाली कहानियों की गहन कवरेज के लिए नक्सात्रा न्यूज़ हिंदी के साथ बने रहें। समाचार और जानकारी के लिए नक्सात्रा न्यूज़ हिंदी को अपने विश्वसनीय स्रोत के रूप में चुनने के लिए धन्यवाद।</p>
        </div>
      </div>

      {/* Second Section: Content and Image */}
      <div className="flex flex-col-reverse md:flex-row mb-8 items-center">
      <div className="md:w-1/2 md:pr-8  ">
        <h2 className="mb-4 text-xl font-bold underline" style={{color:"#7c0000"}}>हमारा विशेष कार्य</h2>
        <p className="leading-relaxed text-gray-700">हमारा मिशन व्यापक समाचार कवरेज प्रदान करना है जो जानकारीपूर्ण और आकर्षक दोनों हो। हमारा लक्ष्य राजनीति, व्यवसाय, प्रौद्योगिकी, मनोरंजन, खेल और अन्य सहित विविध विषयों को कवर करना है। हम पत्रकारिता के उच्चतम मानकों को बनाए रखने का प्रयास करते हैं, यह सुनिश्चित करते हुए कि हमारी खबरें सटीक, निष्पक्ष और निष्पक्ष हों।</p>
        
        <h2 className="mb-4 text-xl font-bold underline my-2" style={{color:"#7c0000"}}>हमारा नज़रिया</h2>
        <p className="leading-relaxed text-gray-700">हम एक सुविज्ञ समाज की कल्पना करते हैं जहां प्रत्येक व्यक्ति के पास शिक्षित निर्णय लेने के लिए आवश्यक जानकारी तक पहुंच हो। अपनी समर्पित रिपोर्टिंग और गहन विश्लेषण के माध्यम से, हमारा लक्ष्य अपने पाठकों के लिए समाचार का एक विश्वसनीय स्रोत बनना है।</p>
        
        <div className="mb-4">
  <h2 className="mb-4 text-xl font-bold my-2 underline" style={{color:"#7c0000"}}>हमारी पेशकश</h2>
  <ul className="list-disc">
    <li className="leading-relaxed text-gray-700">ब्रेकिंग न्यूज़: भारत और दुनिया भर की नवीनतम ब्रेकिंग न्यूज़ से अपडेट रहें।</li>
    <li className="leading-relaxed text-gray-700">गहन विश्लेषण: प्रमुख समाचारों पर विस्तृत विश्लेषण और विशेषज्ञ की राय प्राप्त करें।</li>
    <li className="leading-relaxed text-gray-700">स्थानीय समाचार: क्षेत्रीय समाचारों का कवरेज जो आपके और आपके समुदाय के लिए मायने रखता है।</li>
    <li className="leading-relaxed text-gray-700">विशेष सुविधाएँ: रुचि के विभिन्न विषयों पर विशेष रिपोर्ट और सुविधाओं का अन्वेषण करें।</li>
    <li className="leading-relaxed text-gray-700">इंटरएक्टिव सामग्री: वीडियो, पोल और इंटरैक्टिव सुविधाओं के माध्यम से हमारी सामग्री से जुड़ें।</li>
  </ul>
</div>

      </div>
      <div className="order-1 md:w-1/2 md:mb-0 md:order-2">
        <img src="images/hero.png" alt="Image" className="w-full h-auto rounded-lg" />
      </div>
    </div>
    

      {/* Third Section: Three Images in Row 
      <div className="flex flex-wrap justify-center">
        <div className="w-1/3 p-4">
          <img src="images/4620635.jpg" alt="Image" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-1/3 p-4">
          <img src="images/8767132.jpg" alt="Image" className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-1/3 p-4">
          <img src="images/2112.w039.n003.58B.p1.58.jpg" alt="Image" className="w-full h-auto rounded-lg" />
        </div>
      </div>
*/}
      {/* Dummy Text */}
      <p className="mt-8 text-center text-gray-600 text-lg font-semibold" >नक्सात्रा न्यूज़ हिंदी को अपने विश्वसनीय समाचार स्रोत के रूप में चुनने के लिए धन्यवाद। हम आपको सूचित रखने और उन खबरों से जुड़े रहने के लिए तत्पर हैं जो सबसे महत्वपूर्ण हैं।</p>
    </div>
    <div> <div className="relative mx-auto mb-10 bg-center bg-cover w-44 h-9" style={{backgroundImage:"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNzgiIGhlaWdodD0iMzgiIHZpZXdCb3g9IjAgMCAxNzggMzgiPgogICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBmaWxsPSIjRDFEMUQxIiBkPSJNNC4yODMgMjQuMTA3Yy0uNzA1IDAtMS4yNTgtLjI1Ni0xLjY2LS43NjhoLS4wODVjLjA1Ny41MDIuMDg2Ljc5Mi4wODYuODd2Mi40MzRILjk4NXYtOC42NDhoMS4zMzJsLjIzMS43NzloLjA3NmMuMzgzLS41OTQuOTUtLjg5MiAxLjcwMi0uODkyLjcxIDAgMS4yNjQuMjc0IDEuNjY1LjgyMi40MDEuNTQ4LjYwMiAxLjMwOS42MDIgMi4yODMgMCAuNjQtLjA5NCAxLjE5OC0uMjgyIDEuNjctLjE4OC40NzMtLjQ1Ni44MzMtLjgwMyAxLjA4LS4zNDcuMjQ3LS43NTYuMzctMS4yMjUuMzd6TTMuOCAxOS4xOTNjLS40MDUgMC0uNy4xMjQtLjg4Ni4zNzMtLjE4Ny4yNDktLjI4My42Ni0uMjkgMS4yMzN2LjE3N2MwIC42NDUuMDk1IDEuMTA3LjI4NyAxLjM4Ni4xOTIuMjguNDk1LjQxOS45MS40MTkuNzM0IDAgMS4xMDEtLjYwNSAxLjEwMS0xLjgxNiAwLS41OS0uMDktMS4wMzQtLjI3LTEuMzI5LS4xODItLjI5NS0uNDY1LS40NDMtLjg1Mi0uNDQzem01LjU3IDEuNzk0YzAgLjU5NC4wOTggMS4wNDQuMjkzIDEuMzQ4LjE5Ni4zMDQuNTEzLjQ1Ny45NTQuNDU3LjQzNyAwIC43NS0uMTUyLjk0Mi0uNDU0LjE5Mi0uMzAzLjI4OC0uNzUzLjI4OC0xLjM1MSAwLS41OTUtLjA5Ny0xLjA0LS4yOS0xLjMzOC0uMTk0LS4yOTctLjUxLS40NDUtLjk1LS40NDUtLjQzOCAwLS43NTMuMTQ3LS45NDYuNDQzLS4xOTQuMjk1LS4yOS43NDItLjI5IDEuMzR6bTQuMTUzIDBjMCAuOTc3LS4yNTggMS43NDItLjc3NCAyLjI5My0uNTE1LjU1Mi0xLjIzMy44MjctMi4xNTQuODI3LS41NzYgMC0xLjA4NS4yNDIgMS45ODIuNzI1LjQ3Mi40ODQuNzA5IDEuMTUyLjcwOSAyLjAwNHYuNzk1aC0zLjg3M2MuMDE4LjQ2NS4xNTYuODI5LjQxNCAxLjA5LjI1OC4yNjEuNjIuMzkyIDEuMDg1LjM5Mi4zNjEgMCAuNzAzLS4wMzcgMS4wMjYtLjExMy45NjctLjIwNC4yMjgtLjQ4LS4zMzgtLjgyNy0uMzN6bS4yMyA1LjA2Yy0uOTY2IDAtMS43MjItLjI2Ny0yLjI2Ni0uOC0uNTQ0LS41MzQtLjgxNi0xLjI5LS44MTYtMi4yNjcgMC0xLjAwNy4yNTEtMS43ODUuNzU0LTIuMzM0LjUwNC0uNTUgMS4yLS44MjUgMi4wODctLjgyNS44NDggMCAxLjUxLjI0MiAxLjk4Mi43MjUuNDcyLjQ4NC43MDkgMS4xNTIuNzA5IDIuMDA0di43OTVoLTMuODczYy4wMTguNDY1LjE1Ni44MjkuNDE0IDEuMDkuMjU4LjI2MS42Mi4zOTIgMS4wODUuMzkyLjM2MSAwIC43MDMtLjAzNyAxLjAyNi0uMTEzYTUuMTMzIDUuMTMzIDAgMCAwIDEuMDEtLjM2djEuMjY4Yy0uMjg3LjE0My0uNTkzLjI1LS45Mi4zMmE1Ljc5IDUuNzkgMCAwIDEtMS4xOTEuMTA0em03LjI1My02LjIyNmMuMjIyIDAgLjQwNi"}}></div></div>
    <Footerlayout />
    </div>
  );
}

export default AboutUs;
