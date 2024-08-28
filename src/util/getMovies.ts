export const delay = (ms:number) =>
{
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export default async function getMovies(
    time: number = 0,
    shouldError: boolean = false
)
{
    await delay(time);
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d84fc930fc2b4536d668ea7dd4b0e210&language=en-US&page=1`)
            
        if (!res.ok || shouldError)
        {
            throw new Error(`An Error has occured: ${res.status}`)
        }
        return res.json();


    }
    catch (err) {
        alert(err);
        console.log(err);
    }
   
}
