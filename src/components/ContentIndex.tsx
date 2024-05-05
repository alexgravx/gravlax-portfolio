import Link from "next/link";
import React from "react"
import { MdArrowOutward } from "react-icons/md";

type ProjectType = {
    title: string;
    body: string;
    tags: string[];
}

type ContentListProps = {
    items: ProjectType[];
    contentType?: string;
    fallbackItemImage?: string;
    viewMoreText?: string;
}

const ContentIndex = ({ items, contentType, fallbackItemImage, viewMoreText = "Read More"}:ContentListProps) => {

const urlPrefix = "/project"

    return (
        <div>
            <ul className="grid border-b border-b-slate-100">
                {items.map((item, index) => (
                <li key={index} className="list-item opacity-0f">
                    <Link 
                    href={urlPrefix + "/" + index}
                    className="flex flex-col justify-between border-t border-t-slate-100 py-10 text-slate-200 md:flex-row"
                    aria-label={item.title}>
                        <div className="flex flex-col">
                            <span className="text-3xl font-bold">{item.title}</span>
                            <div className="flex gap-3 text-yellow-400 text-lg font-bold">
                                {item.tags.map((tag, index) => (
                                    <span key={index}>{tag}</span>
                                ))}
                            </div>
                        </div>
                        <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                            {viewMoreText} <MdArrowOutward />
                        </span>
                    </Link>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default ContentIndex