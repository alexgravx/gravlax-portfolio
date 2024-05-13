import { Metadata } from "next"
import { notFound } from "next/navigation"

type Params = { uid: string }

export default function Page({ params } : { params: Params }) {
    return (
    <div>
        Coucou {params.uid}
    </div>
    )
}