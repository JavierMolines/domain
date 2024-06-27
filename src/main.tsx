import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const domRoot = document.getElementById("root") as HTMLElement;

ReactDOM.createRoot(domRoot).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
