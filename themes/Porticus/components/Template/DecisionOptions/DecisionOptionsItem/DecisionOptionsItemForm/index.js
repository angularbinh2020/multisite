import React, { useEffect, useState } from 'react';
import DefaultComponent from './DecisionOptionsItemForm';
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"

const DefinedComponent = (props) => {
	const {acceptanceCode} = props;
	const [fieldsElements, setFieldsElements] = useState('');
	const [formFields, setFormFields] = useState('');
	const [formSent, setFormSent] = useState(false);

	const plugins = [ ScrollToPlugin ];

	const scrollToTop = () => {
		const anchorLinkTarget = document.querySelector('a[name=decision-options]');
		const headerNavigationMenuDimension = document.querySelector('.header-navigation').offsetHeight;

		if(anchorLinkTarget){
			TweenMax.to(window, 1,
				{
					scrollTo: {
						y: anchorLinkTarget.offsetTop - headerNavigationMenuDimension,
						autoKill: false
					},
					ease: Power2.easeInOut
				}
			);
		}
	}

	const getProperty = (thisValueName, propName) => {
		const targetElement = fieldsElements.filter(obj => {
			return obj.elementName === thisValueName;
		});
		const targetElementType = targetElement[0][propName];

		return targetElementType;
	};

	const validateForm = (values) => {
		let errors = {};

		const valueKeys = Object.entries(values);

		for (let index = 0; index < valueKeys.length; index++) {
			const thisValue = valueKeys[index];
			const thisValueName = thisValue[0];
			const thisValueProperty = thisValue[1];
			const thisValueType = getProperty(thisValueName, 'fieldType');
			const isRequired = getProperty(thisValueName, 'required');

			if (isRequired) {
				if (!thisValueProperty) {
					errors[thisValueName] = 'Required';
				}

				if (thisValueType === 'email') {
					if (!thisValueProperty) {
						errors[thisValueName] = 'Required';
					}
					else if (
						!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(thisValueProperty)
					) {
						errors[thisValueName] = 'Invalid email address';
					}
				}

				if (thisValueName === 'emailConf' || thisValueType === 'emailConf') {
					if (thisValueProperty !== values.email) {
						errors[thisValueName] = 'Not matching email';
					}
				}

				if (thisValueType === 'tel') {
					if (!thisValueProperty) {
						errors[thisValueName] = 'Required';
					}
					else if (!/^\d+$/.test(thisValueProperty)) {
						errors[thisValueName] = 'Invalid number';
					}
				}
			}
		}

		return errors;
	};

	const getFields = (fieldsElements) =>
		fieldsElements.reduce((obj, item) => {
			obj[item.elementName] = item.value;
			return obj;
		}, {});

	useEffect(() => {
		const formFieldsItems = getFields(props.acceptanceCode.fields);
		setFieldsElements(props.acceptanceCode.fields);
		setFormFields(formFieldsItems);
	}, []);

	const passedProps = {
		actionUrl: acceptanceCode.actionUrl,
		fieldsElements : fieldsElements,
		formFields: formFields,
		formSent: formSent,
		submitLabel : acceptanceCode.submitLabel,
		validateForm: validateForm
	};

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;
