// Randomized snowflakes
const snowContainer = document.querySelector('.snow');
const createSnowflake = () => {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`;
    snowContainer.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 5000);
};
setInterval(createSnowflake, 200);
function playAllVideos() {
    // Get all iframes in the video section
    const iframes = document.querySelectorAll(".video-container iframe");
    
    // Set autoplay for each video by modifying the iframe src
    iframes.forEach(iframe => {
        const src = iframe.src;
        if (!src.includes("autoplay=1")) {
            iframe.src = src.includes("?") ? `${src}&autoplay=1` : `${src}?autoplay=1`;
        }
    });
}