import api from './api';

export const getInvoice = (bar_code) => api.post('/get-invoice', {
  bar_code,
});

export const getInvoices = (cpf) => api.get(`/invoice?cpf=${cpf}`);
