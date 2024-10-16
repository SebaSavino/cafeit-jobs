import { Job } from "@/types";
import { JobCard } from "./job-card";

interface Props {
  jobs: Job[];
}

export function JobsGrid({ jobs }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
