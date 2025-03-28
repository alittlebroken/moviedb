import config from '../config/config';

export const fetchApiData = async (resource = "movie", type="now_playing") => {

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${config.APIKEY}`
        }
    }

    const response = await fetch(`${config.APIBASEURL}/${resource}/${type}`, options);

    if(!response.ok)
    {
        throw new Error(`HTTP error: Status ${response.status}`);
    }

    return response.json();

};