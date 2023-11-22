import {axiosService} from './axios.service';
import {ENDPOINTS} from '../config/endpoints';
import {Person, ResponsePerson} from '../models/Person';
import {personAdapter} from '../helpers/personAdapter';

type TPeopleResponse = {
  count: number;
  next: string;
  previous: null;
  results: Array<ResponsePerson>;
};

class PeopleService {
  async getPeople(page: number): Promise<{results: Person[]}> {
    const {data} = await axiosService.get<TPeopleResponse>(
      ENDPOINTS.people(page),
    );
    return {results: data.results.map(person => personAdapter(person))};
  }
  async getPerson(id: string) {
    const {data} = await axiosService.get<TPeopleResponse>(
      ENDPOINTS.person_by_id(id),
    );
    return data;
  }
}

export const peopleService = new PeopleService();
