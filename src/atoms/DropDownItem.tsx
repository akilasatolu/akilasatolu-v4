type DropDownItemProps = {
  selectedValue: string;
  clickAction: (selected: string) => void;
  children: React.ReactNode;
};

export const DropDownItem = (props: DropDownItemProps) => {
  return (
    <button className="flex items-center justify-center p-1" onClick={() => props.clickAction(props.selectedValue)}>{props.children}</button>
  );
};