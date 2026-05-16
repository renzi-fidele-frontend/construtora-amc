// Aqui estão todas as funcionalidades que fazer as requisições públicas ao back-end
export async function apanhar_artigos() {
    const res = await fetch(`${process.env.DOMAIN}/api/blog/apanhar_artigos`);
    const data = await res.json();
    return data;
}