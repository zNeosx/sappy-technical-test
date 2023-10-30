"use server";
import { revalidatePath } from "next/cache";
import Beneficiarie from "../models/beneficiarie.model";
import Report from "../models/report.model";
import { connectToDB } from "../mongoose";

export async function fetchBeneficiaries() {
  try {
    connectToDB();
    return await Beneficiarie.find().populate({
      path: "reports",
      model: Report,
    });
  } catch (error: any) {
    throw new Error(`Failed to fetch beneficiaries: ${error.message}`);
  }
}

export async function createReport(beneficiarieId: string, content: string) {
  try {
    connectToDB();
    const newReport = await Report.create({
      content,
    });

    await Beneficiarie.findByIdAndUpdate(beneficiarieId, {
      $push: { reports: newReport._id },
    });

    revalidatePath("/cahiers-de-transmission");

    return { message: "Votre rapport d'humeur a bien été ajouté." };
  } catch (error: any) {
    throw new Error(`Failed to fetch beneficiaries: ${error.message}`);
  }
}
