import { Stack, Skeleton } from "@chakra-ui/react";
import { times } from "lodash";

export type FeedSkeletonProps = {
  count?: number;
};

export const FeedSkeleton: React.FC<FeedSkeletonProps> = ({ count = 10 }) => {
  return (
    <Stack>
      {times(count).map((n) => (
        <Skeleton key={n} height="20px" />
      ))}
    </Stack>
  );
};
