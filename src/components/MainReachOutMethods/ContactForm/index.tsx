import { useState } from 'react';
import axios from 'axios';
import { Controller, useForm } from 'react-hook-form';
import S, { classNames } from './styles';
import TextField from '../../TextField';
import Button from '../../Button';
import InputLabel from '../../InputLabel';
import type { ContactFormProps, ContactFormValues } from './props';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';
import { generateContactFormTween } from './utils';
import { Snackbar } from '@mui/material';

const ContactForm = (props: ContactFormProps) => {
  const { styleVariant = 'default' } = props;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValues>();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [snackbarProps, setSnackbarProps] = useState({
    open: false,
    message: '',
  });

  const onSubmit = async (emailInputDto: ContactFormValues) => {
    setIsSubmitting(true);
    axios
      .post('https://api.web3forms.com/submit', {
        access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
        subject: 'New inquiry from your website!',
        ...emailInputDto,
      })
      .then(() => {
        setSnackbarProps({
          open: true,
          message: 'Message sent successfully!',
        });
        reset();
      })
      .catch(() => {
        setSnackbarProps({
          open: true,
          message: 'Error sending message. Please try again later.',
        });
      })
      .finally(() => setIsSubmitting(false));
  };

  const mergeNameFieldClassNames = (className: string) =>
    classNames.fieldContainer + ' ' + className;

  useVisitedGSAP(generateContactFormTween);

  return (
    <>
      <S.ContactForm
        className={classNames.root}
        onSubmit={handleSubmit(onSubmit)}
        styleVariant={styleVariant}
      >
        <input type="hidden" name="access_key" value="6c7e890b-84c7-459e-ba3e-e194b29a8a16" />
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
              <InputLabel required>Name</InputLabel>
              <TextField
                {...field}
                placeholder="Enter your name/company"
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ''}
                styleVariant={styleVariant}
                name={field.name}
                id={field.name}
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
              <InputLabel required>Email</InputLabel>
              <TextField
                {...field}
                placeholder="Email"
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ''}
                styleVariant={styleVariant}
                name={field.name}
                id={field.name}
              />
            </div>
          )}
        />
        <Controller
          name="phone"
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
              <InputLabel>Phone Number</InputLabel>
              <TextField
                {...field}
                placeholder="Phone Number"
                error={!!errors.phone}
                helperText={errors.phone ? errors.phone.message : ''}
                styleVariant={styleVariant}
                name={field.name}
                id={field.name}
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
                name={field.name}
                id={field.name}
              />
            </div>
          )}
        />
        <Button
          type="submit"
          borderRadius={35}
          padding={22}
          className={classNames.submitButton}
          disabled={isSubmitting}
        >
          Submit
        </Button>
      </S.ContactForm>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        sx={{
          width: 'fit-content',
          marginLeft: 'auto',
        }}
        onClose={() => setSnackbarProps({ ...snackbarProps, open: false })}
        autoHideDuration={3000}
        {...snackbarProps}
      />
    </>
  );
};

export default ContactForm;
