import { useContext } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import fetcher from '../../../lib/fetcher';
import { AuthContext } from '../../../providers/AuthProvider';
import { StyledForm } from './CommentReply.styles';
import { StyledError } from '../../organisms/Forms/CreateForm.styles';

type Props = {
  parentId: number;
};

interface FormInterface {
  content: string;
  parentId: number;
}

const errorMsg = `Can't be empty`;

const CommentReply = ({ parentId }: Props) => {
  const router = useRouter();
  const { user } = useContext(AuthContext);
  const { id } = router.query;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ content }) => {
    if (typeof user.id === 'number') {
      const res = await fetcher('/comment/reply', { parentId, content, userId: user.id, suggestionId: id });
      reset();
      router.reload();
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} errors={errors.content}>
      <label htmlFor="comment">
        <textarea name="comment" id="comment" placeholder="Comment" {...register('content', { required: true })} />
      </label>
      {errors.content && (
        <StyledError margin={3} padding={12}>
          {errorMsg}
        </StyledError>
      )}
      <input type="submit" value="Post Reply" />
    </StyledForm>
  );
};

export default CommentReply;
