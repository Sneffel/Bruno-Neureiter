document.addEventListener('DOMContentLoaded', function() {
    const tiles = document.querySelectorAll('.tile');

    function handleScroll() {
        tiles.forEach(tile => {
            const rect = tile.getBoundingClientRect();
            const tileTop = rect.top;
            const tileBottom = rect.bottom;
            let isDark = false;

            tiles.forEach(otherTile => {
                if (otherTile !== tile) {
                    const otherRect = otherTile.getBoundingClientRect();
                    const otherTop = otherRect.top;
                    const otherBottom = otherRect.bottom;

                    if (tileBottom <= otherTop  && tileBottom >= tileBottom) {
                        isDark = true;
                    }
                }
            });

            if (!isDark) {
                tile.classList.add('darken');
            } else {
                tile.classList.remove('darken');
            }
        });
    }

    handleScroll();

    window.addEventListener('scroll', handleScroll);
});
