import AddClass from "@/components/addclass";
import Class from "@/components/class";
import Term from "@/components/term";
import { ChevronRight } from "@deemlol/next-icons";
import { getClasses, getTerms } from "@/lib/data"

export default async function Home() {
  const terms = await getTerms();
  const classes = await getClasses();

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <div className="grid content-between bg-neutral-300 h-70 rounded-3xl p-8">
          <p className="text-xl">Welcome back, User!</p>
          <p className="font-extrabold text-7xl">XX.XX</p>
        </div>

        <div className="grid md:grid-cols-4 gap-10 mt-8 w-full">
          <div className="grid gap-5 md:col-span-3">
            <div className="flex gap-3 items-center">
                <h1 className="font-bold text-2xl">Current Term</h1>
                <ChevronRight size={32}/>
            </div>
            <div className="flex overflow-auto no-scrollbar md:grid md:grid-cols-3 gap-y-5 gap-x-6 w-full">
              {classes.map((classes) => 
                <Class key={classes.class_name} name={classes.class_name}/>
              )}
              <AddClass/>
            </div>
          </div>
          <div className="md:col-span-1 grid gap-5 content-start">
            <h1 className="font-bold text-2xl">All Terms</h1>
            <div className="grid content-start gap-4 w-full ">
              {terms.map((term) => 
                <Term key={term.term_name} name={term.term_name}/>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
