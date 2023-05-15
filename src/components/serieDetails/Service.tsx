export async function getSerieDetails(serieId: number) {
    const url = `https://api.themoviedb.org/3/tv/${serieId}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjI1OTY2ZTA2NDcwOGZlY2U0MjU2OTAyYjZmNjJkNSIsInN1YiI6IjY0NTc0YjAzZmUwNzdhMDEzOThiZDQyNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.n-FpTuOAfnnvgFwjTBs_7a0ak9iO9OG8SBSxH0nuPos',
        },
    };

    try {
        const response = await fetch(url, options);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            console.error('Request failed with status:', response.status);
            return null;
        }
    } catch (error) {
        console.error(error);
        return null;
    }
}


