import React, { useState, useEffect } from 'react';
import { useSystemContext } from '../../../../../../Core/Contexts';
import DefaultComponent from './FormItemStandard';
import WrapperComponent from './FormItemStandardWrapper';
import {TweenMax, Power2, ScrollToPlugin} from "gsap/all"
import useCmsProps from '../../../../Hooks/useCmsProps.js';

const DefinedComponent = (props) => {
	const [{ routesData }] = useSystemContext();
	const [selectedItems, setSelectedItems] = useState([]);
	const [fieldsElements, setFieldsElements] = useState('');
	const [requiredFields, setRequiredFields] = useState('');
	const [formSent, setFormSent] = useState(false);
	const [isOpen, setIsOpen] = useState();
	const [currentOption, setCurrentOption] = useState();

	const plugins = [ ScrollToPlugin ];

	const openDropdownHandler = () => {
		setIsOpen(!isOpen);
	};

	const scrollToTop = () => {
		const anchorLinkTarget = document.getElementById('form-top');
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

	const sortCodes = (a, b) => {
		if (a.code < b.code) {
			return -1;
		}
		if (a.code > b.code) {
			return 1;
		}

		return 0;
	};

	const removeDuplicates = (myArr, prop) => {
		return myArr.filter((obj, pos, arr) => {
			return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
		});
	};

	const countriesCodes = [
		{
			selected: false,
			code: "7840",
			name: "Abkhazia"
		},
		{
			selected: false,
			code: "93",
			name: "Afghanistan"
		},
		{
			selected: false,
			code: "355",
			name: "Albania"
		},
		{
			selected: false,
			code: "213",
			name: "Algeria"
		},
		{
			selected: false,
			code: "1684",
			name: "American Samoa"
		},
		{
			selected: false,
			code: "376",
			name: "Andorra"
		},
		{
			selected: false,
			code: "244",
			name: "Angola"
		},
		{
			selected: false,
			code: "1264",
			name: "Anguilla"
		},
		{
			selected: false,
			code: "1268",
			name: "Antigua and Barbuda"
		},
		{
			selected: false,
			code: "54",
			name: "Argentina"
		},
		{
			selected: false,
			code: "374",
			name: "Armenia"
		},
		{
			selected: false,
			code: "297",
			name: "Aruba"
		},
		{
			selected: false,
			code: "247",
			name: "Ascension"
		},
		{
			selected: false,
			code: "61",
			name: "Australia"
		},
		{
			selected: false,
			code: "672",
			name: "Australian External Territories"
		},
		{
			selected: false,
			code: "43",
			name: "Austria"
		},
		{
			selected: false,
			code: "994",
			name: "Azerbaijan"
		},
		{
			selected: false,
			code: "1242",
			name: "Bahamas"
		},
		{
			selected: false,
			code: "973",
			name: "Bahrain"
		},
		{
			selected: false,
			code: "880",
			name: "Bangladesh"
		},
		{
			selected: false,
			code: "1246",
			name: "Barbados"
		},
		{
			selected: false,
			code: "1268",
			name: "Barbuda"
		},
		{
			selected: false,
			code: "375",
			name: "Belarus"
		},
		{
			selected: false,
			code: "32",
			name: "Belgium"
		},
		{
			selected: false,
			code: "501",
			name: "Belize"
		},
		{
			selected: false,
			code: "229",
			name: "Benin"
		},
		{
			selected: false,
			code: "1441",
			name: "Bermuda"
		},
		{
			selected: false,
			code: "975",
			name: "Bhutan"
		},
		{
			selected: false,
			code: "591",
			name: "Bolivia"
		},
		{
			selected: false,
			code: "387",
			name: "Bosnia and Herzegovina"
		},
		{
			selected: false,
			code: "267",
			name: "Botswana"
		},
		{
			selected: false,
			code: "55",
			name: "Brazil"
		},
		{
			selected: false,
			code: "246",
			name: "British Indian Ocean Territory"
		},
		{
			selected: false,
			code: "1284",
			name: "British Virgin Islands"
		},
		{
			selected: false,
			code: "673",
			name: "Brunei"
		},
		{
			selected: false,
			code: "359",
			name: "Bulgaria"
		},
		{
			selected: false,
			code: "226",
			name: "Burkina Faso"
		},
		{
			selected: false,
			code: "257",
			name: "Burundi"
		},
		{
			selected: false,
			code: "855",
			name: "Cambodia"
		},
		{
			selected: false,
			code: "237",
			name: "Cameroon"
		},
		{
			selected: true,
			code: "1",
			name: "Canada"
		},
		{
			selected: false,
			code: "238",
			name: "Cape Verde"
		},
		{
			selected: false,
			code: "345",
			name: "Cayman Islands"
		},
		{
			selected: false,
			code: "236",
			name: "Central African Republic"
		},
		{
			selected: false,
			code: "235",
			name: "Chad"
		},
		{
			selected: false,
			code: "56",
			name: "Chile"
		},
		{
			selected: false,
			code: "86",
			name: "China"
		},
		{
			selected: false,
			code: "61",
			name: "Christmas Island"
		},
		{
			selected: false,
			code: "61",
			name: "Cocos-Keeling Islands"
		},
		{
			selected: false,
			code: "57",
			name: "Colombia"
		},
		{
			selected: false,
			code: "269",
			name: "Comoros"
		},
		{
			selected: false,
			code: "242",
			name: "Congo"
		},
		{
			selected: false,
			code: "243",
			name: "Congo, Dem. Rep. of (Zaire)"
		},
		{
			selected: false,
			code: "682",
			name: "Cook Islands"
		},
		{
			selected: false,
			code: "506",
			name: "Costa Rica"
		},
		{
			selected: false,
			code: "385",
			name: "Croatia"
		},
		{
			selected: false,
			code: "53",
			name: "Cuba"
		},
		{
			selected: false,
			code: "599",
			name: "Curacao"
		},
		{
			selected: false,
			code: "537",
			name: "Cyprus"
		},
		{
			selected: false,
			code: "420",
			name: "Czech Republic"
		},
		{
			selected: false,
			code: "45",
			name: "Denmark"
		},
		{
			selected: false,
			code: "246",
			name: "Diego Garcia"
		},
		{
			selected: false,
			code: "253",
			name: "Djibouti"
		},
		{
			selected: false,
			code: "1767",
			name: "Dominica"
		},
		{
			selected: false,
			code: "1809",
			name: "Dominican Republic"
		},
		{
			selected: false,
			code: "670",
			name: "East Timor"
		},
		{
			selected: false,
			code: "56",
			name: "Easter Island"
		},
		{
			selected: false,
			code: "593",
			name: "Ecuador"
		},
		{
			selected: false,
			code: "20",
			name: "Egypt"
		},
		{
			selected: false,
			code: "503",
			name: "El Salvador"
		},
		{
			selected: false,
			code: "240",
			name: "Equatorial Guinea"
		},
		{
			selected: false,
			code: "291",
			name: "Eritrea"
		},
		{
			selected: false,
			code: "372",
			name: "Estonia"
		},
		{
			selected: false,
			code: "251",
			name: "Ethiopia"
		},
		{
			selected: false,
			code: "500",
			name: "Falkland Islands"
		},
		{
			selected: false,
			code: "298",
			name: "Faroe Islands"
		},
		{
			selected: false,
			code: "679",
			name: "Fiji"
		},
		{
			selected: false,
			code: "358",
			name: "Finland"
		},
		{
			selected: false,
			code: "33",
			name: "France"
		},
		{
			selected: false,
			code: "596",
			name: "French Antilles"
		},
		{
			selected: false,
			code: "594",
			name: "French Guiana"
		},
		{
			selected: false,
			code: "689",
			name: "French Polynesia"
		},
		{
			selected: false,
			code: "241",
			name: "Gabon"
		},
		{
			selected: false,
			code: "220",
			name: "Gambia"
		},
		{
			selected: false,
			code: "995",
			name: "Georgia"
		},
		{
			selected: false,
			code: "49",
			name: "Germany"
		},
		{
			selected: false,
			code: "233",
			name: "Ghana"
		},
		{
			selected: false,
			code: "350",
			name: "Gibraltar"
		},
		{
			selected: false,
			code: "30",
			name: "Greece"
		},
		{
			selected: false,
			code: "299",
			name: "Greenland"
		},
		{
			selected: false,
			code: "1473",
			name: "Grenada"
		},
		{
			selected: false,
			code: "590",
			name: "Guadeloupe"
		},
		{
			selected: false,
			code: "1671",
			name: "Guam"
		},
		{
			selected: false,
			code: "502",
			name: "Guatemala"
		},
		{
			selected: false,
			code: "224",
			name: "Guinea"
		},
		{
			selected: false,
			code: "245",
			name: "Guinea-Bissau"
		},
		{
			selected: false,
			code: "595",
			name: "Guyana"
		},
		{
			selected: false,
			code: "509",
			name: "Haiti"
		},
		{
			selected: false,
			code: "504",
			name: "Honduras"
		},
		{
			selected: false,
			code: "852",
			name: "Hong Kong SAR China"
		},
		{
			selected: false,
			code: "36",
			name: "Hungary"
		},
		{
			selected: false,
			code: "354",
			name: "Iceland"
		},
		{
			selected: false,
			code: "91",
			name: "India"
		},
		{
			selected: false,
			code: "62",
			name: "Indonesia"
		},
		{
			selected: false,
			code: "98",
			name: "Iran"
		},
		{
			selected: false,
			code: "964",
			name: "Iraq"
		},
		{
			selected: false,
			code: "353",
			name: "Ireland"
		},
		{
			selected: false,
			code: "972",
			name: "Israel"
		},
		{
			selected: false,
			code: "39",
			name: "Italy"
		},
		{
			selected: false,
			code: "225",
			name: "Ivory Coast"
		},
		{
			selected: false,
			code: "1876",
			name: "Jamaica"
		},
		{
			selected: false,
			code: "81",
			name: "Japan"
		},
		{
			selected: false,
			code: "962",
			name: "Jordan"
		},
		{
			selected: false,
			code: "7 7",
			name: "Kazakhstan"
		},
		{
			selected: false,
			code: "254",
			name: "Kenya"
		},
		{
			selected: false,
			code: "686",
			name: "Kiribati"
		},
		{
			selected: false,
			code: "965",
			name: "Kuwait"
		},
		{
			selected: false,
			code: "996",
			name: "Kyrgyzstan"
		},
		{
			selected: false,
			code: "856",
			name: "Laos"
		},
		{
			selected: false,
			code: "371",
			name: "Latvia"
		},
		{
			selected: false,
			code: "961",
			name: "Lebanon"
		},
		{
			selected: false,
			code: "266",
			name: "Lesotho"
		},
		{
			selected: false,
			code: "231",
			name: "Liberia"
		},
		{
			selected: false,
			code: "218",
			name: "Libya"
		},
		{
			selected: false,
			code: "423",
			name: "Liechtenstein"
		},
		{
			selected: false,
			code: "370",
			name: "Lithuania"
		},
		{
			selected: false,
			code: "352",
			name: "Luxembourg"
		},
		{
			selected: false,
			code: "853",
			name: "Macau SAR China"
		},
		{
			selected: false,
			code: "389",
			name: "Macedonia"
		},
		{
			selected: false,
			code: "261",
			name: "Madagascar"
		},
		{
			selected: false,
			code: "265",
			name: "Malawi"
		},
		{
			selected: false,
			code: "60",
			name: "Malaysia"
		},
		{
			selected: false,
			code: "960",
			name: "Maldives"
		},
		{
			selected: false,
			code: "223",
			name: "Mali"
		},
		{
			selected: false,
			code: "356",
			name: "Malta"
		},
		{
			selected: false,
			code: "692",
			name: "Marshall Islands"
		},
		{
			selected: false,
			code: "596",
			name: "Martinique"
		},
		{
			selected: false,
			code: "222",
			name: "Mauritania"
		},
		{
			selected: false,
			code: "230",
			name: "Mauritius"
		},
		{
			selected: false,
			code: "262",
			name: "Mayotte"
		},
		{
			selected: false,
			code: "52",
			name: "Mexico"
		},
		{
			selected: false,
			code: "691",
			name: "Micronesia"
		},
		{
			selected: false,
			code: "1808",
			name: "Midway Island"
		},
		{
			selected: false,
			code: "373",
			name: "Moldova"
		},
		{
			selected: false,
			code: "377",
			name: "Monaco"
		},
		{
			selected: false,
			code: "976",
			name: "Mongolia"
		},
		{
			selected: false,
			code: "382",
			name: "Montenegro"
		},
		{
			selected: false,
			code: "1664",
			name: "Montserrat"
		},
		{
			selected: false,
			code: "212",
			name: "Morocco"
		},
		{
			selected: false,
			code: "95",
			name: "Myanmar"
		},
		{
			selected: false,
			code: "264",
			name: "Namibia"
		},
		{
			selected: false,
			code: "674",
			name: "Nauru"
		},
		{
			selected: false,
			code: "977",
			name: "Nepal"
		},
		{
			selected: false,
			code: "31",
			name: "Netherlands"
		},
		{
			selected: false,
			code: "599",
			name: "Netherlands Antilles"
		},
		{
			selected: false,
			code: "1869",
			name: "Nevis"
		},
		{
			selected: false,
			code: "687",
			name: "New Caledonia"
		},
		{
			selected: false,
			code: "64",
			name: "New Zealand"
		},
		{
			selected: false,
			code: "505",
			name: "Nicaragua"
		},
		{
			selected: false,
			code: "227",
			name: "Niger"
		},
		{
			selected: false,
			code: "234",
			name: "Nigeria"
		},
		{
			selected: false,
			code: "683",
			name: "Niue"
		},
		{
			selected: false,
			code: "672",
			name: "Norfolk Island"
		},
		{
			selected: false,
			code: "850",
			name: "North Korea"
		},
		{
			selected: false,
			code: "1670",
			name: "Northern Mariana Islands"
		},
		{
			selected: false,
			code: "47",
			name: "Norway"
		},
		{
			selected: false,
			code: "968",
			name: "Oman"
		},
		{
			selected: false,
			code: "92",
			name: "Pakistan"
		},
		{
			selected: false,
			code: "680",
			name: "Palau"
		},
		{
			selected: false,
			code: "970",
			name: "Palestinian Territory"
		},
		{
			selected: false,
			code: "507",
			name: "Panama"
		},
		{
			selected: false,
			code: "675",
			name: "Papua New Guinea"
		},
		{
			selected: false,
			code: "595",
			name: "Paraguay"
		},
		{
			selected: false,
			code: "51",
			name: "Peru"
		},
		{
			selected: false,
			code: "63",
			name: "Philippines"
		},
		{
			selected: false,
			code: "48",
			name: "Poland"
		},
		{
			selected: false,
			code: "351",
			name: "Portugal"
		},
		{
			selected: false,
			code: "1787",
			name: "Puerto Rico"
		},
		{
			selected: false,
			code: "974",
			name: "Qatar"
		},
		{
			selected: false,
			code: "262",
			name: "Reunion"
		},
		{
			selected: false,
			code: "40",
			name: "Romania"
		},
		{
			selected: false,
			code: "7",
			name: "Russia"
		},
		{
			selected: false,
			code: "250",
			name: "Rwanda"
		},
		{
			selected: false,
			code: "685",
			name: "Samoa"
		},
		{
			selected: false,
			code: "378",
			name: "San Marino"
		},
		{
			selected: false,
			code: "966",
			name: "Saudi Arabia"
		},
		{
			selected: false,
			code: "221",
			name: "Senegal"
		},
		{
			selected: false,
			code: "381",
			name: "Serbia"
		},
		{
			selected: false,
			code: "248",
			name: "Seychelles"
		},
		{
			selected: false,
			code: "232",
			name: "Sierra Leone"
		},
		{
			selected: false,
			code: "65",
			name: "Singapore"
		},
		{
			selected: false,
			code: "421",
			name: "Slovakia"
		},
		{
			selected: false,
			code: "386",
			name: "Slovenia"
		},
		{
			selected: false,
			code: "677",
			name: "Solomon Islands"
		},
		{
			selected: false,
			code: "27",
			name: "South Africa"
		},
		{
			selected: false,
			code: "500",
			name: "South Georgia and the South Sandwich Islands"
		},
		{
			selected: false,
			code: "82",
			name: "South Korea"
		},
		{
			selected: false,
			code: "34",
			name: "Spain"
		},
		{
			selected: false,
			code: "94",
			name: "Sri Lanka"
		},
		{
			selected: false,
			code: "249",
			name: "Sudan"
		},
		{
			selected: false,
			code: "597",
			name: "Suriname"
		},
		{
			selected: false,
			code: "268",
			name: "Swaziland"
		},
		{
			selected: false,
			code: "46",
			name: "Sweden"
		},
		{
			selected: false,
			code: "41",
			name: "Switzerland"
		},
		{
			selected: false,
			code: "963",
			name: "Syria"
		},
		{
			selected: false,
			code: "886",
			name: "Taiwan"
		},
		{
			selected: false,
			code: "992",
			name: "Tajikistan"
		},
		{
			selected: false,
			code: "255",
			name: "Tanzania"
		},
		{
			selected: false,
			code: "66",
			name: "Thailand"
		},
		{
			selected: false,
			code: "670",
			name: "Timor Leste"
		},
		{
			selected: false,
			code: "228",
			name: "Togo"
		},
		{
			selected: false,
			code: "690",
			name: "Tokelau"
		},
		{
			selected: false,
			code: "676",
			name: "Tonga"
		},
		{
			selected: false,
			code: "1868",
			name: "Trinidad and Tobago"
		},
		{
			selected: false,
			code: "216",
			name: "Tunisia"
		},
		{
			selected: false,
			code: "90",
			name: "Turkey"
		},
		{
			selected: false,
			code: "993",
			name: "Turkmenistan"
		},
		{
			selected: false,
			code: "1649",
			name: "Turks and Caicos Islands"
		},
		{
			selected: false,
			code: "688",
			name: "Tuvalu"
		},
		{
			selected: false,
			code: "1340",
			name: "U.S. Virgin Islands"
		},
		{
			selected: false,
			code: "256",
			name: "Uganda"
		},
		{
			selected: false,
			code: "380",
			name: "Ukraine"
		},
		{
			selected: false,
			code: "971",
			name: "United Arab Emirates"
		},
		{
			selected: false,
			code: "44",
			name: "United Kingdom"
		},
		{
			selected: false,
			code: "1",
			name: "United States"
		},
		{
			selected: false,
			code: "598",
			name: "Uruguay"
		},
		{
			selected: false,
			code: "998",
			name: "Uzbekistan"
		},
		{
			selected: false,
			code: "678",
			name: "Vanuatu"
		},
		{
			selected: false,
			code: "58",
			name: "Venezuela"
		},
		{
			selected: false,
			code: "84",
			name: "Vietnam"
		},
		{
			selected: false,
			code: "1808",
			name: "Wake Island"
		},
		{
			selected: false,
			code: "681",
			name: "Wallis and Futuna"
		},
		{
			selected: false,
			code: "967",
			name: "Yemen"
		},
		{
			selected: false,
			code: "260",
			name: "Zambia"
		},
		{
			selected: false,
			code: "255",
			name: "Zanzibar"
		},
		{
			selected: false,
			code: "263",
			name: "Zimbabwe"
		}
	]

	// With filter
	const getFields = (fieldsElements) =>
		fieldsElements.filter(({ required }) => required === true).reduce((obj, item) => {
			obj[item.elementName] = '';

			return obj;

		}, {});

	const updateCurrentSelect = (event, code) => {
		let newCode = code;

		if (!code) {
			const selectElement = event.currentTarget;
			const selectedOption = selectElement.options[selectElement.selectedIndex];
			const selectedOptionValue = selectedOption.value;
			const updateSelectionOptionValue = selectedOptionValue.substr(1);

			newCode = updateSelectionOptionValue;
		}

		let newArray = selectedItems.slice(0);

		for (let i = 0; i < newArray.length; i++) {
			const thisCode = newArray[i];

			if (thisCode.code === newCode) {
				newArray.filter((item) => {
					if (item.selected === true) {
						item.selected = false;
					}
				});

				newArray[i].selected = true;
				setCurrentOption(newArray[i].code);

			}
		}

		setSelectedItems(newArray);
	};

	useEffect(() => {
		const sortedCoutryCodes = countriesCodes.sort(sortCodes);
		const cleanedSortedCountryCodes = removeDuplicates(sortedCoutryCodes, 'code');
		// Need to add after Andy update
		const requiredFieldsItems = getFields(props.fields);

		setCurrentOption(cleanedSortedCountryCodes[0].code);
		setSelectedItems(cleanedSortedCountryCodes);
		setFieldsElements(props.fields);
		setRequiredFields(requiredFieldsItems);
	}, []);

	const submitForm = (values, setSubmitting) => {
		const postEndpoint = routesData.endpoints.contactFormEndpointUrl;

		values.emailSubject = props.emailSubject;
		values.recipientEmail = props.emailAddress;
		values.tel = currentOption + values.tel;
		values.fromEmail = props.fromEmail;
		values.emailThankyouMessage = props.emailThankyouMessage

		delete values.emailconf;

		fetch(postEndpoint, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values)
		}).then(() => {
			setSubmitting(false);
			setFormSent(true);
			scrollToTop();
		});

	};

	const passedProps = {
		itemClasses: props.itemClasses,
		emailAddress: props.emailAdress,
		requiredFields: requiredFields,
		fieldsElements: fieldsElements,
		validateForm: validateForm,
		submitForm: submitForm,
		submitLabel: props.submitLabel,
		openDropdownHandler: openDropdownHandler,
		isOpen: isOpen,
		selectedItems: selectedItems,
		currentOption: currentOption,
		updateCurrentSelect: updateCurrentSelect,
		formSent: formSent,
		thankYouMessage: props.message,
		...useCmsProps
	};

	if (props.isRoot) {
		return (
			<WrapperComponent alias={props.alias}>
				<DefaultComponent {...passedProps} />
			</WrapperComponent>
		);
	}

	return <DefaultComponent {...passedProps} />;

};

export default DefinedComponent;