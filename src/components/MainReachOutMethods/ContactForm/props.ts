import type { EmailInputDto } from '../../../api/email.api';

export interface ContactFormProps {
  styleVariant?: 'default' | 'filled';
}

export type ContactFormValues = EmailInputDto;
