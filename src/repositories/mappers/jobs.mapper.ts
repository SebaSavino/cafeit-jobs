import { Job, User, Organization } from "@prisma/client";

import { Job as JobEntity } from "@/types";

type JobFromPrisma = Job & {
  organization?: Organization | null;
  recruiter?: User | null;
};

export class JobsMapper {
  static fromPrismaToEntity(job: JobFromPrisma): JobEntity {
    return {
      id: job.id,
      slug: job.slug,
      title: job.title,
      benefits: job.benefits,
      experienceYears: job.experienceYears,
      isEnglishRequired: job.isEnglishRequired,
      isRemote: job.isRemote,
      salaryCurrency: job.salaryCurrency,
      technicalRequirements: job.technicalRequirements,
      employmentType: job.employmentType,
      location: job.location || undefined,
      organizationName: job.organization?.name,
      recruiterName: job.recruiter?.name,
      clientDefinition: job.clientDefinition,
      roleDefinition: job.roleDefinition,
      englishLevel: job.englishLevel || undefined,
      selectionProcess: job.selectionProcess,
      profileDescription: job.profileDescription,
      salaryRangeMin: job.salaryRange.min,
      salaryRangeMax: job.salaryRange.max,
    };
  }
}
