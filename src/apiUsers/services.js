const url = 'https://64552b05a74f994b3353fee8.mockapi.io/User';

export const getUser = () => {
  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
};
