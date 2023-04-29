let isCeiling = false;

window.addEventListener('wheel', (e) => {

    const delta = e.deltaY;

    if (delta < 0 && !isCeiling) {
        document.documentElement.style.background = 'orangered';
        isCeiling = true;
    } else if (delta > 0 && isCeiling) {
        document.documentElement.style.background = '#333';
        isCeiling = false;
    }

});