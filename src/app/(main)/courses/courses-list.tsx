"use client";
import React, { useTransition } from "react";
import { courses, userProgress } from "@/db/schema";
import { CourseCard } from "./course-card";
import { useRouter } from "next/navigation";
import { upserUserProgress } from "@/actions/user-progress";
import { toast } from "sonner";

type Props = {
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;

  courses: (typeof courses.$inferSelect)[];
};

export const CoursesList = ({ activeCourseId, courses }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const onClick = (id: number) => {
    if (pending) return;
    if (id === activeCourseId) {
      return router.push("/learn");
    }
    startTransition(() => {
      upserUserProgress(id).catch((err) => toast.error(err));
    });
  };
  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          isActive={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
