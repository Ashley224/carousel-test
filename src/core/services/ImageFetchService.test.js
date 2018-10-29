
import ImagesFetchService from './ImagesFetchService';
jest.mock('./ImagesFetchService', () => {
    return function() {
      return {getData: () => {}};
    };
});