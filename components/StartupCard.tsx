import { formatDate } from "@/lib/utils"
import { EyeIcon } from "lucide-react"
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";

export type StartupTypeCard = {
    _createdAt: Date;
    views: number;
    author: {
        _id: number;
        name: string;
    };
    title: string;
    _id: number;
    image: string;
    description: string;
    category: string;
}

const StartupCard = ({post}:{post:StartupTypeCard})=>{
    const{_createdAt,views,author,title,_id,image,description,category}= post;
    const authorId = author?._id;
    const authorName = author?.name;
    return(
        <li className="startup-card graup">
            <div className="flex-between">
                <p className="startup_card_date">
                    {formatDate(_createdAt.toISOString())}
                </p>
                <div className=" flex gap-1.5">
                    <EyeIcon className='size-6 text-primary'/>
                    <span className="text-16-mediun">{views}</span>
                </div>
                </div>
                <div className="flex-between mt-5 gap-5">
                    <div className="flex-1">
                        <Link href={`/user/${authorId}`}>
                        <p className="text-16-medium line-clamp-1">
                           {authorName}
                            </p>
                            </Link>
                            <Link href={`/startup/${_id}`}>
                            <h3 className="text-26-semibold line-clamp-1">
                                {title}
                            </h3>

                            
                           </Link>
                           
                     </div>
                            <Link href={`/user/${authorId}`}>
                            <Image 
                                src="https://placehold.co/48x48" 
                                alt="placeholder" 
                                width={48} 
                                height={48} 
                                className="rounded-full" 
                            />
                            </Link>
                            </div>
                            <Link href={`/startup/${_id}`}>
                            <p className="startup-card_desc">
                                {description}
                            </p>
                            <Image 
                                src={image} 
                                alt="startup image" 
                                width={1024} 
                                height={512} 
                                className="startup-card_img"
                            />
                            </Link>
            <div className="flex-between gap-3 mt-5">
                <Link href={`/?query=${category.toLowerCase()}`}>
                <p className="text-16-medium">{category}</p>
                </Link>
                <Button className="startup-card_btn" asChild>
                    <Link href={`/startup/${_id}`}>
                    details</Link>
                </Button>
            </div>
        </li>
    )
}
export default StartupCard