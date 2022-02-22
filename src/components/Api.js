export const callApi = async (data, { ...options }) => {
  const res = await fetch(
    `http://127.0.0.1:3000/${data}`,
    { ...options },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return res;
};
