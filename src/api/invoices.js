import api from './api';

export const getInvoice = (cpf) => api.post('/get-invoice', {
  holder_cpf: cpf,
});

export const getPublicPlans = () => api.get('/public-plans');
