"use client";
import { createReport } from "@/lib/actions/beneficiarie.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogClose } from "@radix-ui/react-dialog";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

const ReportForm = ({ beneficiarieId }: { beneficiarieId: string }) => {
  const { toast } = useToast();

  const formSchema = z.object({
    comments: z.string().min(3, {
      message: "Le rapport doit avoir au moins 3 caractères.",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comments: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await createReport(beneficiarieId, values.comments);
      form.reset();

      toast({
        title: "Félicitations !",
        description: response.message,
      });
      return null;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 my-2">
        <FormField
          control={form.control}
          name="comments"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  rows={8}
                  placeholder="Remarques..."
                  {...field}
                  className="placeholder:text-blue-4"
                />
              </FormControl>
              <FormMessage className="text-red-600" />
            </FormItem>
          )}
        />

        <div className="w-full inline-flex gap-4 text-sm">
          <DialogClose asChild>
            <Button
              type="button"
              variant="secondary"
              className="w-full rounded-2xl py-7 px-4 border border-blue-6 font-bold"
            >
              Fermer
            </Button>
          </DialogClose>
          <Button
            variant="valid-form"
            type="submit"
            className="w-full rounded-2xl py-7 px-4 font-bold"
          >
            Enregistrer
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ReportForm;
