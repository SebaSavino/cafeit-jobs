import { JobsRepository, Job } from "@/types";
import { prisma } from "@/utils/prisma";
import { JobsMapper } from "./mappers/jobs.mapper";

export class JobsPrismaRepository implements JobsRepository {
  constructor(
    private readonly _client = prisma,
    private readonly _mapper = JobsMapper
  ) {}

  async fetch(): Promise<Job[]> {
    const jobs = await this._client.job.findMany({
      include: {
        organization: true,
        recruiter: true,
      },
    });

    return jobs.map(this._mapper.fromPrismaToEntity);
  }
  create(): Promise<Job> {
    throw new Error("Method not implemented.");
  }
}
