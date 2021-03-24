import api from './api';

export const getPlans = () => api.get('/plans');

export const registerPlan = (name, size, price) => api.post('/plans', {
  name,
  size,
  price,
});

// export const recoveryPassword = (email) => api.post('/forgotPassword', {
//   email,
// });

// export const redefinePassword = (token, password) => api.put('/resetPassword', {
//   token,
//   password,
//   password_confirmation: password,
// });

export const deletePlan = (id) => api.delete(`/plans/${id}`);
