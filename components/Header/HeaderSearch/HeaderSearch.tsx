import { FC, useEffect, useRef } from "react";
import { TextInput } from "react-native";
import { styles } from "./styles";

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
      style={styles.search}
    />
  );
};
