import { FC, useEffect, useRef } from "react";
import { TextInput, TextInputComponent } from "react-native";

type HeaderSearchType = {
  searchValue: string;
  handleChange: (text: string) => void;
};

export const HeaderSearch: FC<HeaderSearchType> = ({
  searchValue,
  handleChange,
}) => {
  const ref = useRef<TextInput>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <TextInput
      ref={ref}
      value={searchValue}
      placeholder="Search"
      onChangeText={handleChange}
      style={{
        borderRadius: 5,
        backgroundColor: "rgba(0,0,0,0.05)",
        padding: 7,
        width: 320,
      }}
    />
  );
};
