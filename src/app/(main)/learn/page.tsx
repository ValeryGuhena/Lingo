import { FeedWrapper } from "@/components/feed-wrapper";
import { StickyWrapper } from "@/components/sticky-wrapper";
import React from "react";
import { LearnHeader } from "./learn-header";
import { UserProgress } from "@/components/user-progress";
import { getUserProgress } from "@/db/query";
import { redirect } from "next/navigation";

const LearnPage = async () => {
  const userProgressData = getUserProgress();
  const [userProgress] = await Promise.all([userProgressData]);
  if (!userProgress || !userProgress.activeCourse) {
    return redirect("/courses");
  }
  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={false}
        />
      </StickyWrapper>
      <FeedWrapper>
        <LearnHeader title={userProgress.activeCourse?.title} />
      </FeedWrapper>
    </div>
  );
};

export default LearnPage;
