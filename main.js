const box = document.querySelector('.box');

box.addEventListener('touchstart', e => {
    e.preventDefault();

    [...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div");
        dot.classList.add('dot');
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
        dot.id = touch.identifier;
        document.body.append(dot);
    });
});

box.addEventListener('touchmove', e => {
    e.preventDefault();

    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.style.top = `${touch.pageY}px`;
        dot.style.left = `${touch.pageX}px`;
    });
});

box.addEventListener('touchend', e => {
    e.preventDefault();

    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier);
        dot.remove();
    });
})