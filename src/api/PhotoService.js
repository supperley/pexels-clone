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

    static async search(query, per_page) {
        console.log(`PhotoService search ${query} ${per_page}`);

        try {
            const response = await PexelsClient.get(
                `/v1/search?query=${query}&per_page=${per_page}`
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
