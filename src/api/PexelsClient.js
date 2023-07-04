import axios from 'axios';

const PexelsClient = axios.create({
    baseURL: 'https://api.pexels.com',
    headers: {
        Authorization:
            '563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf',
    },
});

export default PexelsClient;
