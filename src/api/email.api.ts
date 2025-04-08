import type { AxiosResponse } from 'axios';
import api from './api';

export interface EmailInputDto {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

export const sendEmail = async (emailInputDto: EmailInputDto): Promise<AxiosResponse> => {
  return api.post<EmailInputDto>('/email', emailInputDto);
};
