import Image from "next/image";
import SearchForm from "../components/SearchForm";
export default function Home(){
  return(
    <>
    <section className="pink_container">
    <h1 className="heading">Pitch your startup,<br />
connect with entrepreneurs</h1>
    <p className="subheading !max-w-3xl">
submit your startup to get noticed in virtual competitions and events
    </p>
    <SearchForm/>
    </section>
    </>
  )
}