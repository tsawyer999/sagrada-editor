document.addEventListener('DOMContentLoaded', () => {
    const colorDice = document.querySelectorAll('.dice-red, .dice-yellow, .dice-green, .dice-blue, .dice-purple');
    const whiteDice = document.querySelectorAll('.card .dice');

    console.log('Color dice found:', colorDice.length);
    console.log('White dice found:', whiteDice.length);

    // Make color dice draggable
    colorDice.forEach(dice => {
        dice.setAttribute('draggable', 'true');

        dice.addEventListener('dragstart', (e) => {
            // Get the color class (dice-red, dice-yellow, etc.)
            const colorClass = Array.from(dice.classList).find(cls => cls.startsWith('dice-'));
            console.log('Dragging:', colorClass);
            e.dataTransfer.setData('text/plain', colorClass);
            dice.style.opacity = '0.5';
        });

        dice.addEventListener('dragend', (e) => {
            dice.style.opacity = '1';
        });
    });

    // Make white dice in card accept drops
    whiteDice.forEach(dice => {
        dice.addEventListener('dragover', (e) => {
            e.preventDefault();
            dice.style.opacity = '0.7';
        });

        dice.addEventListener('dragleave', (e) => {
            dice.style.opacity = '1';
        });

        dice.addEventListener('drop', (e) => {
            e.preventDefault();
            const colorClass = e.dataTransfer.getData('text/plain');
            console.log('Dropped color:', colorClass);

            // Remove any existing color classes
            dice.classList.remove('dice-red', 'dice-yellow', 'dice-green', 'dice-blue', 'dice-purple');

            // Add the new color class
            if (colorClass) {
                dice.classList.add(colorClass);
                console.log('Applied class:', colorClass, 'Classes now:', dice.className);
            }

            dice.style.opacity = '1';
        });
    });
});
