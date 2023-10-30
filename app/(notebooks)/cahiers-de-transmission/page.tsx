import BeneficiariesCard from "@/components/beneficiaries-card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchBeneficiaries } from "@/lib/actions/beneficiarie.actions";

async function TransmissionNotebooks() {
  const data = await fetchBeneficiaries();

  return (
    <section className="container py-14 min-h-screen">
      <h1 className="text-blue-1 text-2xl font-bold leading-loose">
        Cahiers de transmission
      </h1>
      <h2 className="text-blue-2 text-base font-normal">
        Curabitur interdum at metus at auctor. Suspendisse suscipit tincidunt
        mauris.
      </h2>
      <Tabs defaultValue="beneficiaries" className="w-full my-10">
        <TabsList>
          <TabsTrigger value="beneficiaries" className="text-xs font-medium">
            Bénéficiaires actifs
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="beneficiaries"
          className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 py-6"
        >
          {data.length !== 0 ? (
            data?.map((beneficiarie: any) => (
              <BeneficiariesCard
                key={beneficiarie._id}
                id={beneficiarie._id}
                name={beneficiarie.name}
                age={beneficiarie.age}
                city={beneficiarie.city}
                image={beneficiarie.image}
                reports={beneficiarie.reports}
              />
            ))
          ) : (
            <p className="text-center col-span-3 font-bold">
              Pas de bénéficiaires
            </p>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
}

export default TransmissionNotebooks;
