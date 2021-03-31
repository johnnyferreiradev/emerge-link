import api from './api';

export const getPlans = () => api.get('/plans');

export const getPublicPlans = () => api.get('/public-plans');

export const getPlan = (id) => api.get(`/plans/${id}`);

export const registerPlan = (name, size, price) => api.post('/plans', {
  name,
  size,
  price,
});

export const updatePlan = (id, data) => api.put(`/plans/${id}`, data);

export const deletePlan = (id) => api.delete(`/plans/${id}`);
