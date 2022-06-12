import { FormWrapper, ButtonWrapper } from './AddComment.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext, useState, FormEvent } from 'react';
import fetcher from '../../../lib/fetcher';
import { useRouter } from 'next/router';
import { AuthContext } from '../../../providers/AuthProvider';

interface FormInterface {
  content: string;
}

type Props = {
  suggestionId: number;
};

const AddComment = ({ suggestionId }: Props) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const [num, setNum] = useState(250);
  const handleCharactersLeft = (event: FormEvent<HTMLTextAreaElement>) => {
    let val = event.currentTarget.value.length;
    setNum(250 - val);
  };

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<FormInterface>();

  const onSubmit: SubmitHandler<FormInterface> = async ({ content }) => {
    const res = await fetcher('/comment/add', { content, userId: user.id, suggestionId });
    reset();
    router.reload();
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
