var checkEnsilTag = () => {
    let ensilTag = document.querySelector('.ensil');
    if (ensilTag) {
        addVideoTag();
    } else {
        console.log('클래스명이 ensil인 태그를 만드세요.');
    }
};
var addVideoTag = () => {
    let ensilTag = document.querySelector('.ensil');
    const videoTag = document.createElement('video');
    videoTag.muted = true;
    videoTag.src =
        'https://api.wecandeo.com/video/default/BOKNS9AQWrF5luxJ3vFHO6RzJ0fBngJY7wXckqDip7A7IVteD8Y2tRPMxzxNx4FQQTlYEgfrQSz7pwLDq7iiYVfQieie';

    ensilTag.append(videoTag);
};



window.setTimeout(checkEnsilTag,1000)
