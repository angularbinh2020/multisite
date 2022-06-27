import React from 'react';
import ContentPicker from '../../../../../../Core/ContentPicker';
import './ContactModuleStandard.scss'

const ContactModuleStandard = ({
	itemClasses,
	contacts,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	return (
		<div 
			className={itemClasses}
			data-component-category={gaEvent && gaEvent.componentCategory}
			data-component-layout={layout}
			data-component-doc-type-alias={documentTypeAlias}
		>
			{contacts &&
				contacts.map((item, index) => (
					<ContentPicker key={index} content={item} />
				))
			}


		</div>
		);
	}


export default ContactModuleStandard;



