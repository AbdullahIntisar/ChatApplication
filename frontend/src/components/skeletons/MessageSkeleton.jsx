const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="skeleton w-10 h-10 rounded-full shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40  animate-pulse"></div>
          <div className="skeleton h-4 w-40  animate-pulse"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="skeleton h-4 w-40  animate-pulse"></div>
        </div>
        <div className="skeleton w-10 h-10 rounded-full shrink-0  animate-pulse"></div>
      </div>
    </>
  );
};
export default MessageSkeleton;
