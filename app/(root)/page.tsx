import Image from "next/image";
import SearchForm from "@/components/SearchForm";
import StartupCard, { StartupTypeCard } from "@/components/StartupCard";
export default async function Home({ searchParams }: { searchParams: Promise<{ query?: string }> }) {
    const query = (await searchParams).query;
    const posts=[{
        _createdAt: new Date(),
        views:55,
        author:{ _id:1,name:'vinay'},
        _id:1,
        description:'This is a description.',
        image:'https://cloudfront-us-east-1.images.arcpublishing.com/eluniverso/RONFABO6IZALLPSTJ5QPTX4FAA.jpg',
        category:"Robots",
        title:"we Robots",
    },
];
    return (
        <>
        <section className="pink_container">
            <h1 className="heading">
                Pitch Your Startup, <br />
                Connect with Entrepreneurs
            </h1>
            <p className="sub-heading !max-w-3xl">
                Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
            </p>
            <SearchForm query={query}/>
        </section >
        <section className="section_container">
<p className="text-30-semibold">
     {query?`Search result for "${query}"`:'All Startups'}

</p> 
<ul className="mt-7 card_grid">
    {posts?.length >0?(
        posts.map((post: StartupTypeCard,index:number)=>(
            <StartupCard key ={post?._id} post={post}/>
        ))
    ):(
        <p className="no-results">No startups found</p>
    )}
</ul>
        </section>
        </>
    );
}