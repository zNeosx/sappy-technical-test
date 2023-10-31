import Image from "next/image";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import moodReportSrc from "@/public/images/mood-report.png";
import { IBeneficiaries } from "@/types";
import ReportForm from "./report-form";
import { ScrollArea } from "./ui/scroll-area";

const BeneficiariesCard = ({
  _id,
  name = "Jean-Hugues L.",
  age = 76,
  city = "Sainte-Suzanne",
  image = "https://via.placeholder.com/48x48",
  reports,
}: IBeneficiaries) => {
  return (
    <div className="rounded-xl p-6 bg-white">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={48}
          height={48}
          className="object- rounded-xl"
        />

        <div className="space-y-2">
          <span className="block text-blue-1 text-base font-bold leading-none">
            {name}
          </span>
          <span className="block text-blue-2 text-sm font-normal leading-none">
            {age} ans, {city}
          </span>
        </div>
      </div>

      {reports.length !== 0 ? (
        <Dialog>
          <DialogTrigger asChild>
            <p className="text-blue-2 text-sm font-normal leading-none mt-2 cursor-pointer">
              <span className="underline">{reports?.length} rapports</span>{" "}
              d'humeur
            </p>
          </DialogTrigger>
          <DialogContent className="px-12 py-16">
            <DialogHeader className="flex flex-col gap-2 items-center border-b border-blue-6 pb-4">
              <Image
                src={moodReportSrc}
                alt="image of mood report"
                width={70}
                height={70}
                className="object-cover mb-6"
              />
              <DialogTitle className="text-blue-1">
                Rapport d'humeur de {name}
              </DialogTitle>
              <DialogDescription className="text-md">
                {reports?.length} rapport(s)
              </DialogDescription>
            </DialogHeader>
            <ScrollArea className="h-[300px] w-full rounded-md border p-4">
              {reports?.map((report: any) => (
                <div key={report._id} className="border-b border-blue-7 py-4">
                  <p>{report.content}</p>
                  <p className="text-end text-sm text-blue-4">
                    Crée le : {report.createdAt.toString().substr(0, 25)}
                  </p>
                </div>
              ))}
            </ScrollArea>
          </DialogContent>
        </Dialog>
      ) : (
        <p className="text-blue-2 text-sm font-normal leading-none mt-2">
          <span className="underline">{reports?.length} rapports</span> d'humeur
        </p>
      )}
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="beneficiaries-card"
            className="rounded-2xl text-primary mt-4"
          >
            Réaliser le rapport d'humeur
          </Button>
        </DialogTrigger>
        <DialogContent className="px-12 py-16">
          <DialogHeader className="flex flex-col gap-2 items-center">
            <Image
              src={moodReportSrc}
              alt="image of mood report"
              width={70}
              height={70}
              className="object-cover mb-6"
            />
            <DialogTitle className="text-blue-1">Rapport d'humeur</DialogTitle>
            <DialogDescription className="text-center max-w-xs">
              Remplissez les champs ci-dessous pour le rapport d’humeur de
              <span className="font-bold text-blue-1"> {name}</span>.
            </DialogDescription>
          </DialogHeader>
          <ReportForm beneficiarieId={_id.toString()} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BeneficiariesCard;
