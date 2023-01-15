window.onload = function () {
    document.addEventListener('mouseover', function (e) {
        if (e.target.tagName == 'P') {
            var text = e.target.innerText.split(" ");

            const chunkSize = 10;
            var chunkedText = []
            for (let i = 0; i < text.length; i += chunkSize) {
                const chunk = text.slice(i, i + chunkSize);
                chunkedText.push(chunk)
            }

            var newText = ""
            var colorCounter = 9

            chunkedText.forEach(
                function (chunk) {
                    if (colorCounter <= 0) {
                        colorCounter = 9
                    }
                    newText += `<span style="background-color:#ffa500${colorCounter}e;">` + chunk.join(' ') + ` </span>`

                    colorCounter -= 2
                }
            )

            e.target.innerHTML = newText

        }
    });
}

