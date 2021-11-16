const mainVideo = document.querySelector(".main-video .video iframe");

const mainVideoTitle = document.querySelector(".main-video .title");

const videoList = document.querySelectorAll(".video-list .vid");

videoList.forEach(
  (video) =>
    (video.onclick = () => {
      videoList.forEach((vid) => vid.classList.remove("active"));
      video.classList.add("active");
      if (video.classList.contains("active")) {
        let src = video.children[0].getAttribute("src");
        mainVideo.src = src;
        window.location.href += `/newvideo`;
        let text = video.children[1].innerHTML;
        mainVideoTitle.innerHTML = text;
      }
    })
);
