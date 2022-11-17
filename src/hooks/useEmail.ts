import emailApi from "../api/emailApi";
import EmailDetails from '../model/EmailDetails';
import axios from 'axios';

export const useEmail = () => {
  const sendEmail = async (emailDetails: EmailDetails) => {
    try {
      await emailApi.post('', emailDetails);
      return { ok: true, message: 'Email sent successfully' }
    } catch ( error ) {
      if ( axios.isAxiosError( error ) ) {
        const { message } = error.response?.data as any || 'An error has occurred';
        return { ok: false, message };
      } else {
        return { ok: false, message: 'An error has ocurred' };
      }
    }
  }
  return {
    sendEmail
  }
}
