import fetcher from '../../../lib/fetcher';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Category, Status } from '../../../types/types';
import { StyledError } from './CreateForm.styles';
import { StyledForm } from './EditForm.styles';
import EditIcon from '../../atoms/EditIcon/EditIcon';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { ModalContext } from '../../../providers/ModalProvider';
import { ISuggestionResponse } from '../../../types/types';

interface FormInterface {
  title: string;
  details: string;
  status: Status;
  category: Category;
}

type Props = {
  suggestion: ISuggestionResponse;
};

const errorMessage = `Can't be empty`;

const EditForm = ({ suggestion }: Props) => {
  const [submitValue, setSubmitValue] = useState<'Save Changes' | 'Changes Saved'>('Save Changes');
  const { handleModalOpen } = useContext(ModalContext);
  const router = useRouter();
  const handleInputChange = () => setSubmitValue('Save Changes');
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ title, details, category, status }) => {
    const res = await fetcher('/suggestion/edit', { title, details, category, status });
    if (res.status === 200) {
      setSubmitValue('Changes Saved');
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors} submitValue={submitValue}>
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
          {...register('title', { onChange: handleInputChange, required: true })}
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
        <select
          id="category"
          name="category"
          defaultValue={suggestion.category}
          {...register('category', { onChange: handleInputChange, required: true })}
        >
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
        <select
          name="status"
          id="status"
          defaultValue={suggestion.status}
          {...register('status', { onChange: handleInputChange, required: true })}
        >
          <option value="Planned">Planned</option>
          <option value="In-Progress">In-Progress</option>
          <option value="Live">Live</option>
        </select>
      </label>
      <label htmlFor="details">
        <h4>Feedback Detail</h4>
        <p>Include any specific comments on what should be improved, added, etc.</p>
        <textarea
          id="details"
          name="details"
          defaultValue={suggestion.details}
          {...register('details', { onChange: handleInputChange, required: true })}
        />
        {errors.details && (
          <StyledError margin={6} padding={0}>
            {errorMessage}
          </StyledError>
        )}
      </label>
      <div>
        <button type="submit">{submitValue}</button>
        <button
          type="reset"
          onClick={(e) => {
            router.push(`/suggestion/${suggestion.id}`);
          }}
        >
          Cancel
        </button>
        <button type="button" onClick={handleModalOpen}>
          Delete
        </button>
      </div>
    </StyledForm>
  );
};

export default EditForm;
