import { StyledForm } from './CommentReply.styles';
import { useForm, SubmitHandler } from 'react-hook-form';
import { StyledError } from '../../organisms/Forms/CreateForm.styles';
import fetcher from '../../../lib/fetcher';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type Props = {
  parentId: number;
};

interface FormInterface {
  content: string;
  parentId: number;
}

const errorMsg = `Can't be empty`;

const CommentReply = ({ parentId }: Props) => {
  const [userId, setUserId] = useState<null | number>(null);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setUserId(+sessionStorage.getItem('userId'));
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInterface>();
  const onSubmit: SubmitHandler<FormInterface> = async ({ content }) => {
    if (typeof userId === 'number') {
      const res = await fetcher('/comment/reply', { parentId, content, userId, suggestionId: id });
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
