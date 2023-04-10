const { initCoviSdk } = window;

const Video = () => {

    return (
        <>
            <video className='playerClass' controls playsInline></video>
            <button onClick={() => initCoviSdk()}>initCoviSdk button</button>
        </>
    );
};

export default Video;
