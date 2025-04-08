import { Controller, useForm } from 'react-hook-form';
import S, { classNames } from './styles';
import TextField from '../../TextField';
import Button from '../../Button';
import InputLabel from '../../InputLabel';
import type { ContactFormProps, ContactFormValues } from './props';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';
import { generateContactFormTween } from './utils';

const ContactForm = (props: ContactFormProps) => {
  const { styleVariant = 'default' } = props;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormValues>();

  const onSubmit = (data: ContactFormValues) => {
    console.log('Form submitted:', data);
  };

  const mergeNameFieldClassNames = (className: string) =>
    classNames.fieldContainer + ' ' + className;

  useVisitedGSAP(generateContactFormTween);

  return (
    <S.ContactForm
      className={classNames.root}
      onSubmit={handleSubmit(onSubmit)}
      styleVariant={styleVariant}
    >
      <Controller
        name="name"
        control={control}
        defaultValue=""
        rules={{
          required: 'Name is required',
          minLength: {
            value: 2,
            message: 'Name must be at least 2 characters long',
          },
        }}
        render={({ field }) => (
          <div className={mergeNameFieldClassNames(classNames.nameField)}>
            <InputLabel htmlFor={field.name} required>
              Name
            </InputLabel>
            <TextField
              {...field}
              placeholder="Enter your name/company"
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ''}
              styleVariant={styleVariant}
            />
          </div>
        )}
      />
      <Controller
        name="email"
        control={control}
        defaultValue=""
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: 'Invalid email address',
          },
        }}
        render={({ field }) => (
          <div className={mergeNameFieldClassNames(classNames.emailField)}>
            <InputLabel htmlFor={field.name} required>
              Email
            </InputLabel>
            <TextField
              {...field}
              placeholder="Email"
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
              styleVariant={styleVariant}
            />
          </div>
        )}
      />
      <Controller
        name="phoneNumber"
        control={control}
        defaultValue=""
        rules={{
          pattern: {
            value: /^(\+?\d{1,2}\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/,
            message: 'Please enter a valid phone number',
          },
        }}
        render={({ field }) => (
          <div className={mergeNameFieldClassNames(classNames.phoneNumberField)}>
            <InputLabel htmlFor={field.name}>Phone Number</InputLabel>
            <TextField
              {...field}
              placeholder="Phone Number"
              error={!!errors.phoneNumber}
              helperText={errors.phoneNumber ? errors.phoneNumber.message : ''}
              styleVariant={styleVariant}
            />
          </div>
        )}
      />
      <Controller
        name="message"
        control={control}
        defaultValue=""
        rules={{
          required: 'Message is required',
          minLength: { value: 20, message: 'Message should be at least 20 characters long' },
        }}
        render={({ field }) => (
          <div className={mergeNameFieldClassNames(classNames.messageField)}>
            <InputLabel htmlFor={field.name} required>
              Message
            </InputLabel>
            <TextField
              {...field}
              placeholder="Message"
              multiline
              rows={4}
              error={!!errors.message}
              helperText={errors.message ? errors.message.message : ''}
              styleVariant={styleVariant}
            />
          </div>
        )}
      />
      <Button type="submit" borderRadius={35} padding={22} className={classNames.submitButton}>
        Submit
      </Button>
    </S.ContactForm>
  );
};

export default ContactForm;
