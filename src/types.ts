export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export interface Repository<Type, CreateDTO> {
  fetch(): Promise<Type[]>;
  create(dto: CreateDTO): Promise<Type>;
}

export type JobsRepository = Repository<Job, CreateJobDTO>;

export type CreateJobDTO = Omit<Job, "id">;

export type SalaryCurrency = "ARS" | "USD";

export type EmploymentType = "Dependency" | "Contractor" | "Freelance";

export type EnglishLevel = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export interface Job {
  id: string;
  slug: string;
  title: string;
  profileDescription: string;
  organizationName?: string;
  recruiterName?: string;
  salaryRangeMin: number;
  salaryRangeMax: number;
  salaryCurrency: SalaryCurrency;
  employmentType: EmploymentType;
  technicalRequirements: TechnicalRequirement[];
  experienceYears: number;
  isEnglishRequired: boolean;
  englishLevel?: EnglishLevel;
  roleDefinition: string;
  clientDefinition: string;
  benefits: string;
  selectionProcess: string;
  isRemote: boolean;
  location?: string;
}

export interface TechnicalRequirement {
  name: string;
  isRequired: boolean;
  experienceYears: number;
}
