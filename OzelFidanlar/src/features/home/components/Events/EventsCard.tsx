import type { Activity } from "../../data/Gallery/galleryData";

interface GalleryCardProps {
  activity: Activity;
  hoverContent?: "short" | "full";
}

const EventsCard = ({ activity, hoverContent = "short" }: GalleryCardProps) => {
  const hoverText =
    hoverContent === "full" ? activity.description : activity.shortDescription;

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg shadow-gray-500">
      <div className="h-96 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 flex items-center bg-linear-to-t from-black/90 via-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="p-6 text-white">
          <h3 className="text-lg font-semibold">{activity.title}</h3>
          <p className="mt-2 text-sm leading-relaxed">
            {hoverText}
          </p>
        </div>
      </div>

      <div className="relative z-10 p-6 bg-white">
        <h4 className="text-base font-medium text-gray-900">
          {activity.category}
        </h4>
        <p className="text-base font-semibold text-gray-500">
          {activity.title}
        </p>
      </div>
    </div>
  );
};

export default EventsCard;
