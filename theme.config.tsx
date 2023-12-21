import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
	logo: <span>Nautilus Docs</span>,
	project: {
		link: "https://github.com/frc-emotion",
	},
	docsRepositoryBase: "https://github.com/frc-emotion/docs",
	footer: {
		text: "Nautilus by FRC Team 2658 Σ-Motion",
	},
	editLink: { text: "" },
	useNextSeoProps() {
		return {
			titleTemplate: `%s - Nautilus Docs`,
		};
	},
	head: (
		<head>
			<link rel="icon" href="/favicon.ico" />
		</head>
	),
};

export default config;
