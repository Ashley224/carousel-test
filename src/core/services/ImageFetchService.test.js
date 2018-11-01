import ImageFetchService from './ImageFetchService';


export const ImageFetchServicee = jest.mock('./ImageFetchService', () => {
  return jest.fn().mockImplementation(() => {
    return {getData: jest.fn()
      .mockImplementationOnce(() => ({
        response: [],
      }))
      .mockImplementationOnce(() => {
        throw(new Error('Error fetching Images'))
      })};
  });
});
// jest.mock('./ImageFetchService', () => {
//   return {getData : jest.fn().mockImplementationOnce(() => ({
//     response: []
//   }))
//   .mockImplementationOnce(() => {
//     throw(new Error('Error fetching Images'))
//      })
// }});
// beforeEach(() => {
//   ImageFetchService.mockClear();
// });
// Mock is not working had to fix itk
it('The consumer should be able to call new() on ImageFetchService', () => {
  const imageFetchingConsumer = new ImageFetchService();
  // Ensure constructor created the object:
  expect(imageFetchingConsumer).toBeTruthy();
});
it('The consumer should be able to call new() on ImageFetchService', () => {
  const imageFetchingConsumer = new ImageFetchService();
  // Ensure constructor created the object:
  imageFetchingConsumer.getData();
  expect(imageFetchingConsumer).toBeTruthy();
});
