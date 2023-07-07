import PexelsClient from './PexelsClient';

export default class PhotoService {
    static async getCurated(pageNumber) {
        try {
            const response = await PexelsClient.get(
                `/v1/curated?per_page=15&page=${pageNumber}`
            );

            console.log('response: ', response);

            return response.data.photos.map((photo) => ({
                id: photo.id,
                url: photo.url,
                src: photo.src.original,
                photographer: photo.photographer,
                photographerURL: photo.photographer_url,
            }));
        } catch (e) {
            console.log(e);
        }
    }

    static async search(query, params, page, per_page) {
        console.log(
            `[PhotoService] search ${query}, params = ${params}, page = ${page}, per_page = ${per_page}`
        );

        let searchQuery = '',
            size = params?.get('size'),
            orientation = params?.get('orientation');

        if (size) searchQuery += `&size=${size}`;
        if (orientation) searchQuery += `&orientation=${orientation}`;

        try {
            const response = await PexelsClient.get(
                `/v1/search?query=${query}&page=${page}&per_page=${per_page}${searchQuery}`
            );

            console.log('response: ', response);

            return response.data.photos.map((photo) => ({
                id: photo.id,
                url: photo.url,
                src: photo.src.original,
                photographer: photo.photographer,
                photographerURL: photo.photographer_url,
            }));
        } catch (e) {
            console.log(e);
        }
    }
}
