export async function loadWords() {
    const res = await fetch('https://5nft.link/search?word=개죽');
    return await res.json();
}