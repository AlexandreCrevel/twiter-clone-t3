import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Tweet {
  id: string;
  content: string;
  createdAt: string;
  likesCount: number;
  likedByMe: boolean;
  user: {
    id: string;
    name: string | null;
    image: string | null;
  };
}

interface InfiniteTweetListProps {
  isLoading: boolean;
  isError: boolean;
  hasMore: boolean;
  fetchNewTweets: () => Promise<unknown>;
  tweets?: Tweet[];
}

const InfiniteTweetList = ({
  tweets,
  isError,
  isLoading,
  fetchNewTweets,
  hasMore,
}: InfiniteTweetListProps) => {
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  if ((tweets && tweets.length === 0) || tweets == null) {
    return (
      <h2 className="my-4 text-center text-2xl text-gray-500">No Tweets</h2>
    );
  }

  return (
    <ul>
      <InfiniteScroll
        dataLength={tweets.length}
        next={fetchNewTweets}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {tweets.map((tweet) => {
          return (
            <div
              key={tweet.id}
              className="flex border-b border-gray-200 px-4 py-2"
            ></div>
          );
        })}
      </InfiniteScroll>
    </ul>
  );
};

export default InfiniteTweetList;
