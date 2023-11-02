import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  data: {
    slug: string; // Assuming you have a slug configured for events in Sanity
    eventName: string;
    description: string;
    eventDate: string;
    imageUrl: string; // Assuming you will have an image field configured in your Sanity schema
    venue: string;
    // ... other fields as needed
  };
}

export default function EventCard({ data }: EventCardProps) {
  // Formatting date can be done more elegantly using libraries like 'date-fns'
  const formattedDate = new Date(data.eventDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <Link href={`/dashboard/happenings/${data.slug}`}>
      <div className="transition-all ease-in-out duration-200 hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden border-2 border-stone-100 bg-white dark:border-stone-800 cursor-pointer">
        <Image src={data.imageUrl} alt={data.eventName ?? "Event"} width={500} height={400} objectFit="cover" />
        <div className="px-5 py-8 dark:bg-black">
          <h3 className="text-xl font-title tracking-wide dark:text-white">{data.eventName}</h3>
          <p className="my-2 text-md italic text-stone-600 dark:text-stone-400">{data.description}</p>
          <p className="text-sm text-stone-600 dark:text-stone-400">Happening at {data.venue} on {formattedDate}</p>
        </div>
      </div>
    </Link>
  );
}
