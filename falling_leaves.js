document.addEventListener("DOMContentLoaded", function () {
    function createLeaf() {
        const leaf = document.createElement("div");
        leaf.className = "leaf";
        document.body.appendChild(leaf);

      
        const startX = Math.random() * window.innerWidth;
        leaf.style.left = `${startX}px`;
        leaf.style.top = `-50px`;

        
        const size = Math.random() * 30 + 20; 
        leaf.style.width = `${size}px`;
        leaf.style.height = `${size}px`;

       
        const duration = Math.random() * 5 + 3; 

        leaf.animate(
            [
                { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
                { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ],
            {
                duration: duration * 1000,
                easing: "linear"
            }
        );

        setTimeout(() => {
            leaf.remove();
        }, duration * 1000);
    }

    
    setInterval(createLeaf, 500);
});
