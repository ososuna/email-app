import axios from 'axios';

const emailApi = axios.create({
  baseURL: `${ import.meta.env.VITE_API_URI }/email`
});

export default emailApi;
