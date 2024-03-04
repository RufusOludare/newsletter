interface ListItemsProps {
  text: string;
  imageSrc: string;
  className?: string;
}

const ListItems = ({ text, imageSrc, className }: ListItemsProps) => {
  return (
    <div className={`flex gap-2 items-start mb-2 ${className}`}>
      <img src={imageSrc} alt="" />
      <p className="md:text-sm">{text}</p>
    </div>
  );
};

export default ListItems;
