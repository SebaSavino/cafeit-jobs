import { CreateJobDTO, Job, JobsRepository } from "@/types";
import { jobsMock } from "./mocks/jobs.mock";

export class JobsMockRepository implements JobsRepository {
  constructor(private _jobs: Job[] = jobsMock) {}

  async fetch(): Promise<Job[]> {
    return this._jobs;
  }

  create(dto: CreateJobDTO): Promise<Job> {
    throw new Error("Method not implemented.");
  }
}
