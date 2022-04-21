export const callApi = async (data: any, { ...options }) => {
  const res = await fetch(`http://127.0.0.1:3000/${data}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return res;
};

export const callApiUsers = async (data: any, { ...options }: any) => {
  const res = await fetch(`http://127.0.0.1:3000/${data}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return res;
};
