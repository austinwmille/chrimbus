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
