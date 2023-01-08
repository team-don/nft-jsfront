export default function Words() {
    const fetchWords = async () => {
        const response = await fetch('https://5nft.link/search?word=개죽')

        if (response.ok) {
            const words = await response.json();
        }
        console.log(response.json());
    }
    // return fetchWords();
}