import axios from "axios";

const API_URL = "http://localhost:3000/api";

export const fetchMentorsByInterest = (interest) => {
  return axios.get(`${API_URL}/mentors`, { params: { interest } });
};

export const fetchMentorAvailability = (mentorId) => {
  return axios.get(`${API_URL}/mentor/${mentorId}`);
};

export const scheduleSession = (data) => {
  return axios.post(`${API_URL}/schedule`, data);
};

export const makePayment = (data) => {
  return axios.post(`${API_URL}/payment`, data);
};
