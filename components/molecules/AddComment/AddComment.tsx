import { FormWrapper, ButtonWrapper } from './AddComment.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState } from 'react';

interface FormInterface {
  content: string;
}

const AddComment = () => {
  const [num, setNum] = useState(250);
  const handleCharactersLeft = (event) => {
    let val = event.target.value.length;
    setNum(250 - val);
  };

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
    <FormWrapper onSubmit={handleSubmit(onSubmit)} isTooLong={num < 0}>
      <h3>Add Comment</h3>
      <textarea
        placeholder="Type your comment here"
        {...register('content', { onChange: handleCharactersLeft, required: true, maxLength: 250 })}
      />
      <p>{num > 0 ? `${num} Characters left` : 'Comment is too long'} </p>
      <ButtonWrapper>
        <button type="submit">Post Comment</button>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default AddComment;
