import { JobsPrismaRepository } from "@/repositories/jobs-prisma.repository";
import { JobsMockRepository } from "@/repositories/jobs-mock.repository";
import { JobsRepository } from "@/types";

export class JobsService {
  constructor(private readonly _repository: JobsRepository) {}

  fetch() {
    return this._repository.fetch();
  }
}

export class JobsServiceFactory {
  static create(repository?: JobsRepository) {
    return new JobsService(repository || new JobsPrismaRepository());
  }

  static mock() {
    return this.create(new JobsMockRepository());
  }
}
