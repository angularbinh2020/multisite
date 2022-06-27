import React from "react";
import reactHtmlParser from 'react-html-parser';
import "./PageIntroductionStandard.scss";

const PageIntroductionStandard = ({
	itemClasses,
	pageIntroduction
}) => {
	return (
		<div className={itemClasses}>
			{pageIntroduction && (
				<div>
					{pageIntroduction.title && <h3>{pageIntroduction.title}</h3>}
					{pageIntroduction.text && <div>{reactHtmlParser(pageIntroduction.text)}</div>}
				</div>
			)}
		</div>
	);
};

export default PageIntroductionStandard;
