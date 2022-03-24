import http from "../http-common";

class HousesDataService {
  getAll() {
    return http.get(`houses`);
  }

  get(id) {
    return http.get(`/houses/${id}`)
  }
}

export default new HousesDataService();