import StartupForm from "@/components/StartupForm";
import { start } from "repl";

const Page=()=>{
    return<><section className="pink_container !min-h-[230px]">
        <h1 className="heading"> Submit your  startup </h1>
        </section>
        <StartupForm/>
        </>
};
export default Page;