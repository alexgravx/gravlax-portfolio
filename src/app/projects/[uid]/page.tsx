import { Metadata } from "next"
import { notFound } from "next/navigation"
import TextBlock from "@/components/TextBlock"
import Bounded from "@/components/Bounded"
import Heading from "@/components/Heading"

type Params = { uid: string }

const testtext = "markdown # Oleaster parte tenebat Leucothoen flamina pendebat ## Longa membrana non prospexit solidum quo caput Lorem markdownum stabat contigerant inductum palla nec Pallas illa tibi sollertia moenia, tuos Lyciae et dixit. In fingam inpune nymphas cum lacte estque conversa linguae. 1. Ubi fauces no 2. Telethusa errare lucis splendenti re nimia effugimus miseros in sanguine quidem attonitaeque aliter: pende ferro."

function formatDate(date: string) {

    if (date) {

        const dateOptions: Intl.DateTimeFormatOptions = {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        };

        return new Intl.DateTimeFormat("en-US", dateOptions).format(new Date(date))
    }
}


export default function Page({ params } : { params: Params }) {
    return (
    <Bounded as="article">
        <div className="rounded-2xl border-2 border-slate-800 bg-slate-900 px-4 py-10 md-px:8 md:py-2O"  >
            <Heading as="h1">Titre N° {params.uid}</Heading>
            <div className="flex gap-4 text-yellow-400 text-xl font-bold">
                {["Tag1","Tag2"].map((tag, index) => (
                    <span key={index}>{tag}</span>
                ))}
            </div>
            <p className="mt-8 border-b border-slate-600 text-xl font-medium text-slate-300">{formatDate('01/01/2020')}</p>
            <div className="prose prose-lg prose-invert mt-12 w-full max-w-none md:mt-20">
            <TextBlock text={testtext} />
            </div>
        </div> 
    </Bounded>
    )
}

