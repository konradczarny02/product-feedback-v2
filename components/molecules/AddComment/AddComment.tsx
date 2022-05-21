import { FormWrapper, ButtonWrapper } from './AddComment.styles';
import { useForm, SubmitHandler } from 'react-hook-form';

interface FormInterface {
  content: string;
}

const AddComment = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();

  const onSubmit: SubmitHandler<FormInterface> = ({ content }) => {
    console.log(content);
    reset();
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <h3>Add Comment</h3>
      <textarea placeholder="Type your comment here" {...register('content', { required: true })} />
      <p>250 Characters left</p>
      <ButtonWrapper>
        <button type="submit">Post Comment</button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default AddComment;
