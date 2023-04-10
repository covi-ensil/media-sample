import { useEffect } from 'react';

const {kakao, initSdk} = window

const Video = () => {
    useEffect(() => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };
    
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
    },[])

    // console.log(initSdk, kakao)


    return (
        <>
        <div id="map" className='w-[300px] h-[300px]'></div>
        <div>hello</div>
        {/* <div id="playerContainer">
            <video class="playerClass my-6" controls playsinline></video>
        </div> */}
         <video class="playerClass my-6" controls playsinline></video>
        <button onClick={() => initSdk()}>initSdk button</button>
            {/* <div id='playerContainer'>
                <video className='playerClass' controls playsInline ref={playerRef}></video>
            </div> */}
        </>
    );
};

export default Video;
