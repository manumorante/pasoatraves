import { notFound } from "next/navigation"
import { allPages } from "@/.contentlayer/generated"
import Link from "next/link"
import { Mdx } from "@/components/mdx-components"

export default function Home() {
  const page = allPages.find((page) => page._id === "pages/home.mdx")

  if (!page) {
    return notFound()
  }

  return (
    <div className="prose dark:prose-invert">
      <article>
        {/* <h2>{page.title}</h2> */}
        <h3>{page.description}</h3>
        <Mdx code={page.body.code} />
      </article>

      {/* <Link href="/list">List</Link> */}
    </div>
  )
}
