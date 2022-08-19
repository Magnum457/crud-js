import api from "./api";

export async function index() {
  const response = await api.get("");

  return response;
}

export async function create(data) {
  const response = await api.post("/", data);

  return response;
}

export async function read(id) {
  const response = await api.get(`/${id}`);

  return response;
}

export async function update(id) {
  const response = await api.put(`/${id}`);

  return response;
}

export async function destroy(id) {
  const response = await api.delete(`/${id}`);

  return response;
}