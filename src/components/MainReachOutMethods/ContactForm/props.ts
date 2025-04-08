export interface ContactFormProps {
  styleVariant?: 'default' | 'filled';
}

export type ContactFormValues = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};
