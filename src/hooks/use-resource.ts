const useResource = <T extends unknown>(path: string) => {
  let data: T;
  let status = "pending";

  const fetchResource = (): Promise<T> => {
    return fetch(new URL(path, `${import.meta.env.VITE_API_URL}`).toString(), {
      method: "GET",
    }).then((response) => response.json());
  };

  const suspender = fetchResource()
    .then((response) => {
      data = response;
      status = "success";
    })
    .catch(() => {
      status = "error";
    });

  return {
    read() {
      if (status === "pending") throw suspender;
      if (status === "success") return data;
    },
  };
};

export default useResource;
