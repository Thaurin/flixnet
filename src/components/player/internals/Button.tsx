import { Icon, Icons } from "@/components/Icon";

export function VideoPlayerButton(props: {
  children?: React.ReactNode;
  onClick: () => void;
  icon?: Icons;
  iconSizeClass?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={props.onClick}
      className={[
        "p-2 rounded-full hover:bg-video-buttonBackground hover:bg-opacity-75 transition-transform duration-100 active:scale-110 active:bg-opacity-100 active:text-white",
        props.className ?? "",
      ].join(" ")}
    >
      {props.icon && (
        <Icon className={props.iconSizeClass || "text-2xl"} icon={props.icon} />
      )}
      {props.children}
    </button>
  );
}