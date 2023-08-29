export default function Footer() {
    const date = new Date().getFullYear()

    return (
        <footer>
            Site by <a href="https://github.com/K8215" target="_blank">K8215</a> | {date}
        </footer>
    )
}