const SnowAnimation = (container) => {
    let containerElement = document.querySelector(`${container}`);
    
    // Check if containerElement exists
    if (!containerElement) {
        console.error(`Element with class '${container}' not found.`);
        return;
    }

    let count = 50;
    for (let i = 0; i < count; i++) {
        let leftSnow = Math.floor(Math.random() * containerElement.clientWidth);
         let topSnow = Math.floor(Math.random() * containerElement.clientHeight);
         let withSnow = Math.floor(Math.random() * 50);
         let timeSnow=Math.floor((Math.random()*5)+5);
         let blurSnow=Math.floor(Math.random()*5);
        let div = document.createElement('div');
        div.classList.add('snow');
        div.style.left = leftSnow+'px';
        div.style.top =  topSnow+'px';
        div.style.width=withSnow+'px';
        div.style.height=withSnow+'px';
        div.style.animationDuration=timeSnow+"s";
        div.style.filter="blur("+blurSnow+"px)";
        containerElement.appendChild(div);
    }
};

SnowAnimation.stop =function(container){
    let containerElement = document.querySelector(`${container}`);
    if (!containerElement) {
        console.error(`Element with class '${container}' not found.`);
        return;
    }
    let snow= containerElement.querySelectorAll('.snow')
    snow.forEach(snowflake => snowflake.remove()); // Xóa các bông tuyết hiện tại
}

export  {SnowAnimation};
