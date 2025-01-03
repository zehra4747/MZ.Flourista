import { client } from "@/sanity/lib/client";

interface Iblog {
  name: string;
  subheading: string;
  caption: string;
  attribution: string;
  poster: string; // Replaced 'any' with 'string' for type safety. Adjust if necessary.
}

export default async function Home() {
  const res: Iblog[] = await client.fetch(`*[_type == 'blog'] `);
  // console.log(res);

  return (
    <div>
      {res.map((data, index) => (
        <div key={index}>
          <h1 className="font-bold">{data.name}</h1>
          <p className="italic">{data.subheading}</p>
          <div>{data.poster}</div>
          <p>{data.caption}</p>
        </div>
      ))}
    </div>
  );
}
