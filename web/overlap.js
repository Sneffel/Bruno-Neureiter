document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.tile');

    updateVisibility();

    window.addEventListener('scroll', updateVisibility);
    window.addEventListener('resize', updateVisibility);

    function updateVisibility() {
        tiles.forEach(tile => {
            if (isCovered(tile)) {
                tile.classList.add('darken');
            } else {
                tile.classList.remove('darken');
            }
        });
    }

    function isCovered(element) {
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        return (
            rect.bottom <= 0 ||
            rect.top >= viewportHeight ||
            rect.right <= 0 ||
            rect.left >= viewportWidth
        );
    }
});
