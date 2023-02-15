import * as React from "react";
import ExhibitProvider from "./src/contexts/ExhibitContext";

import "./styles.scss";

export const wrapRootElement = ({ element }) => (
	<ExhibitProvider>{element}</ExhibitProvider>
);
