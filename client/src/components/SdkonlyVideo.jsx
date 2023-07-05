const { initCoviSdk, coviClickLandingButton } = window;

const SdkonlyVideo = () => {
    return (
        <>
        <div className="w-[350px] md:w-[500px] mx-auto">
            <video className='covi_player' controls playsInline></video>
            <div className=' flex justify-end gap-2'>
                <button className='w-20 text-sm' onClick={() => coviClickLandingButton()}>
                    더 알아보기
                </button>
                <button className='w-24 text-sm' onClick={() => initCoviSdk()}>
                    다른 광고 재생
                </button>
            </div>
        </div>
        </>
    );
};

export default SdkonlyVideo;
