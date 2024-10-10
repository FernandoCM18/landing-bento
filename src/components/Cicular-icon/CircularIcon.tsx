import Icon, { IconName } from "../Icon/Icon";

interface Props {
  icon: IconName;
};

export const CircularIcon = ({ icon }: Props) => {
  return (
    <div className="bg-neutral-neutral-25 p-[10px] rounded-full">
      <Icon name={icon} />
    </div>
  )
}
