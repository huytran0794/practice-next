import { useRouter } from "next/router";

// export async function generateStaticParams() {
//     // const posts = await fetch('https://.../posts').then((res) => res.json())

//     // return posts.map((post) => ({
//     //   slug: post.slug,
//     // }))

//     // return [{ slug: 123 }];
// }
export default function Page({ params }: { params: { slug: string } }) {
    console.log(params);
    return <div>My Post: {params.slug}</div>
}