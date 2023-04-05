import { useState } from "react";
import useGetSearchResults from "../queries/useGetSearchResults";
import { ResultsTable } from "./ResultsTable/ResultsTable";
import { QueryInput } from "./QueryInput/QueryInput";
import styles from './Display.module.css';
import logo from '../resources/Gametime_logo.svg.png'

export function DisplayContainer() {
  const [searchString, setSearchString] = useState(null);

  const resultData = useGetSearchResults({
    parameters: {
      searchString
    }
  });
  return (
    <div className={styles.displayWrapper}>
      <img src={logo} alt={'Gametime'} className={styles.logoStyle} />
      <QueryInput onChange={(data) => setSearchString(data) }/>
      <ResultsTable resultData={resultData} />
    </div>
  );
}
