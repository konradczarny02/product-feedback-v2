import fetcher from '../../../lib/fetcher';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Category, Status } from '../../../types/types';
import { StyledError } from './CreateForm.styles';
import { StyledForm } from './EditForm.styles';
import EditIcon from '../../atoms/EditIcon/EditIcon';

interface FormInterface {
  title: string;
  details: string;
  status: Status;
  category: Category;
}

const errorMessage = `Can't be empty`;

const EditForm = ({ suggestion }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ title, details, category, status }) => {};
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors}>
      <EditIcon />
      <h2>{`Editing '${suggestion.title}'`}</h2>
      <label htmlFor="title">
        <h4>Feedback Title</h4>
        <p>Add a short, descriptive headline</p>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={suggestion.title}
          {...register('title', {
            required: true,
          })}
        />
        {errors.title && (
          <StyledError margin={6} padding={0}>
            {errorMessage}
          </StyledError>
        )}
      </label>
      <label htmlFor="category">
        <h4>Category</h4>
        <p>Choose a category for your feedback</p>
        <select id="category" name="category" defaultValue={suggestion.category} {...register('category', { required: true })}>
          <option value="Feature">Feature</option>
          <option value="Enhancement">Enhancement</option>
          <option value="UX">UX</option>
          <option value="UI">UI</option>
          <option value="Bug">Bug</option>
        </select>
      </label>
      <label htmlFor="status">
        <h4>Update Status</h4>
        <p>Change feature state</p>
        <select name="status" id="status" defaultValue={suggestion.status} {...register('status', { required: true })}>
          <option value="Planned">Planned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>
      </label>
      <label htmlFor="details">
        <h4>Feedback Detail</h4>
        <p>Include any specific comments on what should be improved, added, etc.</p>
        <textarea id="details" name="details" defaultValue={suggestion.details} {...register('details', { required: true })} />
        {errors.details && (
          <StyledError margin={6} padding={0}>
            {errorMessage}
          </StyledError>
        )}
      </label>
      <div>
        <button type="submit">Save Changes</button>
        <button type="reset">Cancel</button>
        <button>Delete</button>
      </div>
    </StyledForm>
  );
};

export default EditForm;
