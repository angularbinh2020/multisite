import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import './FormItemStandard.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tween } from 'react-gsap';

const FormItemStandard = ({
	itemClasses,
	validateForm,
	submitForm,
	requiredFields,
	fieldsElements,
	openDropdownHandler,
	isOpen,
	currentOption,
	selectedItems,
	updateCurrentSelect,
	formSent,
	thankYouMessage,
	submitLabel,
	documentTypeAlias,
	gaEvent,
	layout
}) => {
	const [tween, setTween] = useState();
	const [from, setFrom] = useState({ height: 0 });
	const [to, setTo] = useState({ height: 0 });

	useEffect(() => {

		const height = tween ? tween.targets[0].scrollHeight : 0 // 'auto' doesn't work

		if (isOpen) {
			setFrom({ height: 0 });
			setTo({ height: height });
		} else {
			setFrom({ height: 'auto' });
			setTo({ height: 0 });
		}

	}, [isOpen]);

	return (
		<React.Fragment>
			<div
				className={itemClasses}
				data-component-category={gaEvent && gaEvent.componentCategory}
				data-component-layout={layout}
				data-component-doc-type-alias={documentTypeAlias}
			>
				{!formSent && requiredFields &&
					<Formik
						initialValues={requiredFields}
						validate={values => {
							let errors = validateForm(values);

							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							submitForm(values, setSubmitting);
						}}
					>
						{({
							values,
							errors,
							touched,
							handleChange,
							handleBlur,
							handleSubmit,
							isSubmitting
						}) => (
							<form onSubmit={handleSubmit}>
								{fieldsElements &&
									fieldsElements.map((item, i) => {
										return (
											<React.Fragment key={i}>

												{item.fieldType === 'tel' &&
													<div className={errors[item.elementName] ? 'error' : ''}>
														<label>{item.label}</label>

														<div className="contact-tel-wrapper">
															<div className="contact-tel-dropdown">
																<div className="select-wrapper">
																	<select value={'+' + currentOption} onChange={(e) => updateCurrentSelect(e)}>
																		{selectedItems &&
																			selectedItems.map((code, i) => (
																				<option key={i} >
																					+{code.code}
																				</option>
																			))
																		}
																	</select>
																</div>

																<div className="dropdown-replacement-wrapper">
																	<div className={'dropdown-replacement' + (isOpen ? ' open' : '')}>
																		<div className="dropdown-replacement-selected" onClick={(e) => openDropdownHandler()}>
																			{selectedItems &&
																				selectedItems.map((value, i) => {
																					if (value.selected) {
																						return <span key={i}>+ {value.code}</span>;
																					}
																				})
																			}
																			<span className="dropdown-icon"><FontAwesomeIcon icon={['far', 'chevron-down']} /></span>
																		</div>
																	</div>

																	<Tween from={from} to={to} duration={0.2} ref={ref => setTween(ref)}>
																		<ul className="dropdown-replacement-list ">
																			{selectedItems &&
																				selectedItems.map((value, i) => (
																					<li className={value.selected ? 'selected' : ''} key={i}>
																						<span data-selected={value.selected} onClick={(e) => { openDropdownHandler(); updateCurrentSelect(e, value.code); }}>+{value.code}</span>
																					</li>
																				))
																			}
																		</ul>
																	</Tween>
																</div>
															</div>

															<input
																type={item.fieldType}
																name={item.elementName}
																onChange={handleChange}
																onBlur={handleBlur}
																value={values[item.elementName]}
																placeholder={item.placeholder}
															/>
														</div>

														<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
													</div>
												}

												{item.fieldType === 'textarea' &&
													<div className={errors[item.elementName] ? 'error' : ''}>
														<label>{item.label}</label>
														<textarea
															type={item.fieldType}
															name={item.elementName}
															onChange={handleChange}
															onBlur={handleBlur}
															value={values[item.elementName]}
															placeholder={item.placeholder}
														/>
														<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
													</div>
												}

												{item.fieldType === 'email' &&
													<div className={errors[item.elementName] ? 'error' : ''}>
														<label>{item.label}</label>

														<input
															type={item.type}
															name={item.elementName}
															onChange={handleChange}
															onBlur={handleBlur}
															value={values[item.elementName]}
															placeholder={item.placeholder}
														/>

														<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
													</div>
												}

												{item.fieldType === 'input' &&
													<div className={errors[item.elementName] ? 'error' : ''}>
														<label>{item.label}</label>

														<input
															type={item.type}
															name={item.elementName}
															onChange={handleChange}
															onBlur={handleBlur}
															value={values[item.elementName]}
															placeholder={item.placeholder}
														/>

														<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
													</div>
												}
											</React.Fragment>
										);
									})
								}

								<button className="cta" type="submit" disabled={isSubmitting}>
									{submitLabel}
								</button>
							</form>
						)}
					</Formik>
				}

				{formSent && thankYouMessage &&
					<p>{thankYouMessage}</p>
				}
			</div>
		</React.Fragment>
	);
};


export default FormItemStandard;