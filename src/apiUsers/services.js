const url = 'https://64552b05a74f994b3353fee8.mockapi.io/User';
// url.searchParams.append('completed', false);
// url.searchParams.append('page', 1);
// url.searchParams.append('limit', 3);

export const getUser = () => {
  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  });
};

