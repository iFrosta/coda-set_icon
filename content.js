let run = async () => {
    let timeout = (ms) => new Promise(resolve => setTimeout(resolve, ms)), lastScrollY = window.scrollY

    await timeout(1000).then(() => setIcon(true))

    async function setIcon() {
        let icon = document.querySelector('.kr-canvas-header')?.querySelector('img'),
            favicon = document.querySelector("link[rel~='icon']")

        if (icon && favicon) {
            favicon.href = icon.src

            if (favicon.href != icon.src) {
                await timeout(1000)
                setIcon()
            }
        } else {
            await timeout(1000)
            setIcon()
        }
    }
}

run()