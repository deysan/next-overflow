import { getUserAnswers } from '@/lib/actions/user.action';
import { SearchParamsProps } from '@/types';
import AnswerCard from '../cards/AnswerCard';

export default async function AnswersTab({
  searchParams,
  userId,
  clerkId,
}: {
  userId: string;
  clerkId?: string | null;
} & SearchParamsProps) {
  const result = await getUserAnswers({
    userId,
    page: 1,
  });

  return (
    <>
      {result.answers.map((item) => (
        <AnswerCard
          key={item._id}
          clerkId={clerkId}
          _id={item._id}
          question={item.question}
          author={item.author}
          upvotes={item.upvotes.length}
          createdAt={item.createdAt}
        />
      ))}
    </>
  );
}
