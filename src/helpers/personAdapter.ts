import {Person, ResponsePerson} from '../models/Person';

export const personAdapter = (person: ResponsePerson): Person => {
  return {
    ...person,
    id: +person.url.split('/')[5],
  };
};
