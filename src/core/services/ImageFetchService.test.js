import ImageFetchService from './ImageFetchService';
const mockgetData = jest.fn();
jest.mock('./ImageFetchService', () => {
  return jest.fn().mockImplementation(() => {
    return {getData: mockgetData};
  });
});
beforeEach(() => {
  ImageFetchService.mockClear();
});
it('The consumer should be able to call new() on ImageFetchService', () => {
  const imageFetchingConsumer = new ImageFetchService();
  // Ensure constructor created the object:
  expect(imageFetchingConsumer).toBeTruthy();
});
// it('The consumer should be able to call new() on ImageFetchService', () => {
//   const imageFetchingConsumer = new ImageFetchService();
//   // Ensure constructor created the object:
//   imageFetchingConsumer.getData();
//   expect(imageFetchingConsumer).toBeTruthy();
// });