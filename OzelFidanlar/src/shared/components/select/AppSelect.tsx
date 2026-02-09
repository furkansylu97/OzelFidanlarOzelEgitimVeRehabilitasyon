import * as Select from "@radix-ui/react-select";
import { FaChevronDown, FaCheck } from "react-icons/fa";

interface AppSelectProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: string[];
}

const AppSelect = ({
  value,
  onChange,
  placeholder,
  options,
}: AppSelectProps) => {
  return (
    <Select.Root value={value} onValueChange={onChange}>
      <Select.Trigger
        className="
          input w-full
          flex items-center justify-between
          cursor-pointer
          text-sm lg:text-base
        "
      >
        <Select.Value placeholder={placeholder} />

        <Select.Icon className="text-white/70">
          <FaChevronDown size={14} />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          position="popper"
          side="bottom"
          sideOffset={6}
          align="center"
          avoidCollisions={false}
          className=" z-30 rounded-lg bg-[#001064] shadow-xl overflow-hidden max-h-[60vh]"
        >
          <Select.Viewport className="overflow-y-auto">
            {options.map((option) => (
              <Select.Item
                key={option}
                value={option}
                className="
                  flex items-center justify-between
                  min-h-10
                  px-3 lg:px-4 py-1 lg:py-2
                  text-sm lg:text-base
                  text-white
                  cursor-pointer
                  outline-none
                  hover:bg-white/10
                  data-[state=checked]:bg-white/20
                "
              >
                <Select.ItemText>{option}</Select.ItemText>

                <Select.ItemIndicator className="text-amber-300">
                  <FaCheck size={14} />
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

export default AppSelect;
