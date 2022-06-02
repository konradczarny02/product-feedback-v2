import { StyledForm, Heading, Title, Description, StyledError } from './CreateForm.styles';
import AddIcon from '../../atoms/AddIcon/AddIcon';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Category } from '../../../types/types';
import fetcher from '../../../lib/fetcher';
import { useState } from 'react';
import { useRouter } from 'next/router';

const errorMessage = `Can't be empty`;

interface FormInterface {
  title: string;
  category: Category;
  details: string;
}

const CreateForm = () => {
  const [error, setError] = useState<string>('');
  const [buttonValue, setButtonValue] = useState<'Add Feedback' | 'Success'>('Add Feedback');
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ title, details, category }) => {
    const res = await fetcher('/suggestion/add', { title, details, category });
    if (res.status >= 400) {
      setError('Suggestion with that title already exists');
    } else {
      reset();
      setButtonValue('Success');
      setTimeout(() => {
        setButtonValue('Add Feedback');
        router.push('/');
      }, 2000);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors} submitVal={buttonValue}>
      <AddIcon />
      <Title>Create New Feedback</Title>
      <Heading>Feedback Title</Heading>
      <Description>Add a short, descriptive headline</Description>
      <input type="text" {...register('title', { required: true })} />
      {errors.title && (
        <StyledError margin={-22} padding={10}>
          {errorMessage}
        </StyledError>
      )}
      <Heading>Category</Heading>
      <Description>Choose a category for your feedback</Description>
      <select {...register('category')}>
        <option value="Feature">Feature</option>
        <option value="UI">UI</option>
        <option value="UX">UX</option>
        <option value="Enhancement">Enhancement</option>
        <option value="Bug">Bug</option>
      </select>
      <Heading>Feedback Detail</Heading>
      <Description>Include any specific comments on what should be improved, added, etc.</Description>
      <textarea {...register('details', { required: true })}></textarea>
      {errors.details && (
        <StyledError margin={-38} padding={10}>
          {errorMessage}
        </StyledError>
      )}
      {error && (
        <StyledError margin={-24} padding={12}>
          {error}
        </StyledError>
      )}
      <div>
        <input type="submit" value={buttonValue} />
        <input type="reset" value="Cancel" onClick={() => setTimeout(() => router.push('/'), 1000)} />
      </div>
    </StyledForm>
  );
};

export default CreateForm;
