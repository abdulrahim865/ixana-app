export default function Chip({ title, bgColor, textColor }) {
  return (
    <div className="flex justify-center py-5">
      <span
        className="py-1 px-4 text-xs rounded-3xl"
        style={{
          color: textColor,
          backgroundColor: bgColor,
        }}
      >
        {title}
      </span>
    </div>
  );
}
