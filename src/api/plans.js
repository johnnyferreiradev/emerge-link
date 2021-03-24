import api from './api';

export const getPlans = () => api.get('/plans');

// export const register = (name, email, password) => api.post('/user', {
//   name,
//   email,
//   password,
//   password_confirmation: password,
// });

// export const recoveryPassword = (email) => api.post('/forgotPassword', {
//   email,
// });

// export const redefinePassword = (token, password) => api.put('/resetPassword', {
//   token,
//   password,
//   password_confirmation: password,
// });

export const deletePlan = (id) => api.delete(`/plans/${id}`);
