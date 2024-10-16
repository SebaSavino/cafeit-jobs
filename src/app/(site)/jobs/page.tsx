import { JobsServiceFactory } from "@/services/jobs.service";
import { JobsGrid } from "@/components/jobs/jobs-grid";

export default async function JobsPage() {
  const jobs = await JobsServiceFactory.mock().fetch();

  return (
    <div className="container mx-auto py-16">
      <JobsGrid jobs={jobs} />
    </div>
  );
}
