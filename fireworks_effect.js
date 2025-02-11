document.addEventListener("DOMContentLoaded", function () {
    document.body.addEventListener("click", function (event) {
        createFirework(event.pageX, event.pageY);
    });

    function createFirework(x, y) {
        for (let i = 0; i < 20; i++) {
            const firework = document.createElement("div");
            firework.className = "firework";
            document.body.appendChild(firework);

            const angle = (i / 20) * (2 * Math.PI);
            const distance = Math.random() * 100 + 50;

            const xMove = Math.cos(angle) * distance;
            const yMove = Math.sin(angle) * distance;

            firework.style.left = `${x}px`;
            firework.style.top = `${y}px`;

            firework.animate(
                [
                    { transform: `translate(0, 0)`, opacity: 1 },
                    { transform: `translate(${xMove}px, ${yMove}px)`, opacity: 0 }
                ],
                {
                    duration: 1000,
                    easing: "ease-out"
                }
            );

            setTimeout(() => {
                firework.remove();
            }, 1000);
        }
    }
});
