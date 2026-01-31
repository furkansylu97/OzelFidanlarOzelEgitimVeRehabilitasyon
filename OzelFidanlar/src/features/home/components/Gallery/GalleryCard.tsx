import type { Activity } from "../../data/Gallery/galleryData";

interface ActivityCardProps {
  activity: Activity;
}

const GalleryCard = ({ activity }: ActivityCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-lg shadow-gray-500">
      <div className="h-96 overflow-hidden">
        <img
          src={activity.image}
          alt={activity.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900">
          {activity.category}
        </h3>
        <p className="text-base text-gray-500">{activity.title}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
