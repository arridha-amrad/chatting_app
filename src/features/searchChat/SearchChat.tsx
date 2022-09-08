import { useState } from "react";
import { SearchInput } from "../../components/components.export";

const SearchChat = () => {
  const [searchKey, setSearchKey] = useState("");
  return (
    <SearchInput
      name="search"
      onChange={(e) => setSearchKey(e.target.value)}
      value={searchKey}
    />
  );
};

export default SearchChat;
