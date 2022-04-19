import { useQuery } from "h3";

export default defineEventHandler(async (event) => {
  const query = useQuery(event.req);
  const result = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(query.email === "cory@razorcx.com");
    }, 500);
  });
  return result;
});
