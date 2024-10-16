import { Job } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  BriefcaseIcon,
  DollarSignIcon,
  GlobeIcon,
  GraduationCapIcon,
  MapPinIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";

interface Props {
  job: Job;
}

export function JobCard({ job }: Props) {
  return (
    <Card className="flex flex-col rounded-lg bg-gradient-to-br from-background to-[#0b090a] border-zinc-800/80">
      <CardHeader>
        <CardTitle className="text-2xl">{job.title}</CardTitle>
        <CardDescription className="text-xl font-light">
          {job.organizationName}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow border-t pt-4">
        <p className="mb-4">{job.profileDescription}</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <BriefcaseIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">{job.employmentType}</span>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {job.isRemote ? "Remoto" : job.location}
            </span>
          </div>
          <div className="flex items-center">
            <DollarSignIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {job.salaryRangeMin} - {job.salaryRangeMax} {job.salaryCurrency}
            </span>
          </div>
          <div className="flex items-center">
            <GraduationCapIcon className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {job.experienceYears} años de experiencia
            </span>
          </div>
          {job.isEnglishRequired && (
            <div className="flex items-center">
              <GlobeIcon className="w-4 h-4 mr-2" />
              <span className="text-sm">
                Inglés {job.englishLevel} requerido
              </span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2">
        {job.technicalRequirements.map((req, index) => (
          <Badge key={index} variant="secondary">
            {req.name} ({req.experienceYears} años)
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}
