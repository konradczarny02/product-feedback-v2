import { StyledForm, Heading, Title, Description, StyledError } from './CreateForm.styles';
import AddIcon from '../../atoms/AddIcon/AddIcon';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Category } from '../../../types/types';

const errorMessage = `Can't be empty`;

interface FormInterface {
  title: string;
  category: Category;
  details: string;
}

const CreateForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = ({ title, details, category }) => {
    console.log(title, details, category);
    reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors}>
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
      <input type="submit" value="Add Feedback" />
      <input type="reset" value="Cancel" />
    </StyledForm>
  );
};

export default CreateForm;
