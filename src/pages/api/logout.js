export default async (request, response) => {
  response.json({ auth: false, token: null });
};
