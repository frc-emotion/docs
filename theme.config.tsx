import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

/**@todo */
export const PROJECT_NAME = "[Project Name]";

const config: DocsThemeConfig = {
	logo: <span>{PROJECT_NAME} Docs</span>,
	project: {
		link: "https://github.com/frc-emotion",
	},
	docsRepositoryBase: "https://github.com/frc-emotion/docs",
	footer: {
		text: PROJECT_NAME + " by FRC Team 2658 Σ-Motion",
	},
	editLink: { text: "" },
	useNextSeoProps() {
		return {
			titleTemplate: `%s - ${PROJECT_NAME} Docs`,
		};
	},
	head: (
		<head>
			<link rel="icon" href="/favicon.ico" />
		</head>
	),
};

export default config;
