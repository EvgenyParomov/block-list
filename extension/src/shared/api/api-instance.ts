// custom-instance.ts

const baseURL = "http://localhost:3000"; // use your own URL here or environment variable

class ApiError extends Error {
  constructor(public data: unknown) {
    super("Api Error");
  }
}

export const createInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
}: {
  url: string;
  method: "get" | "post" | "put" | "delete" | "patch";
  params?: Record<string, string>;
  headers?: HeadersInit;
  data?: BodyType<unknown>;
  responseType?: string;
}): Promise<T> => {
  const response = await fetch(
    `${baseURL}${url}` + new URLSearchParams(params),
    {
      method: method.toUpperCase(),
      credentials: "include",
      headers,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (!response.status.toString().startsWith("2")) {
    throw new ApiError(response);
  }

  return response.json();
};

export type BodyType<BodyData> = BodyData;
export type ErrorType<Error> = Error;
// In case you want to wrap the body type (optional)
// (if the custom instance is processing data before sending it, like changing the case for example)
