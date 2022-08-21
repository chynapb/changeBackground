const COLORS_ARRAY = ['blue','red','green','purple','orange', 'yellow', 'pink', 'black','gray','brown'];

function changeBg() {
    document.body.style.background = COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)];
}