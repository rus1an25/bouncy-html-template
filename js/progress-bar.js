document.addEventListener('DOMContentLoaded', () => {
    const barContainers = document.querySelectorAll('.progress-bar');

    barContainers.forEach(container => {
        if (container.dataset.value) {
            const ctx = container.getContext('2d');
            let per = container.dataset.value;
            ctx.setTransform(1, 0, 0, -1, 0, container.height);
            ctx.translate(124, 0);
            ctx.rotate((Math.PI / 180) * 90);

            ctx.beginPath();
            ctx.arc(62, 62, 58, 0, (2 * Math.PI));
            ctx.strokeStyle = '#047378';
            ctx.lineWidth = 3;
            ctx.stroke();
            ctx.beginPath();
            ctx.arc(62, 62, 58, 0, (2 * (per / 100)) * Math.PI);
            ctx.strokeStyle = '#19bd9a';
            ctx.lineWidth = 5;
            ctx.stroke();

            ctx.setTransform(1, 0, 0, 1, 0, container.height);
            ctx.fillStyle = '#81868e';
            ctx.font = "1.8rem 'Source Sans Pro', sans-serif";
            ctx.textBaseline = "middle";
            ctx.fillText(`${per}`, 42, -60);
            ctx.font = "1rem 'Source Sans Pro', sans-serif";
            ctx.fillText(`%`, 72, -58);

            const span = document.createElement('span');
            span.style.position = 'absolute';
            span.innerHTML = `${per}%`;
            container.appendChild(span);
        }
    });
});