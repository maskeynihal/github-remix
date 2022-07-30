const getQueryParams = (url: string) => {
  const query = new URLSearchParams(new URL(url).search);

  const params: any = {};

  for (const [key, value] of query.entries()) {
    params[key] = value;
  }

  return params;
};

export { getQueryParams };
