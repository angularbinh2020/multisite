import React, {useRef} from 'react';
import { Formik } from 'formik';
import Select from '../../../../../../../Lego/FormElements/Select';
import reactHtmlParser from 'react-html-parser';

import './DecisionOptionsItemForm.scss';

const DecisionOptionsItemForm = ({
	actionUrl,
	fieldsElements,
	formFields,
	validateForm,
	formSent,
	submitLabel
}) => {

	const formEl = useRef(null);

	return (
		<React.Fragment>
			{!formSent && formFields &&
				<Formik
					initialValues={formFields}
					validate={values => {
						let errors = validateForm(values);

						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						formEl.current.submit();
					}}
				>
					{({
						values,
						errors,
						touched,
						handleChange,
						handleBlur,
						handleSubmit,
						setFieldValue,
						setFieldTouched,
						isSubmitting
					}) => (
						<form action={actionUrl} method="POST"  ref={formEl} onSubmit={handleSubmit}>

							{fieldsElements &&
								fieldsElements.map((item, i) => {
									return (
										<div key={i}>
											{item.fieldType === 'hidden' &&
												<input
													type={item.fieldType}
													name={item.elementName}
													id={item.id}
													defaultValue={item.value}
												/>
											}

											{item.fieldType === 'select' &&
												<div className={errors[item.elementName] && touched[item.elementName] ? 'error' : ''}>
													<label htmlFor={item.for}>{reactHtmlParser(item.label)}</label>
													<Select
														name={item.elementName}
														options={item.options}
														onChange={setFieldValue}
														onBlur={setFieldTouched}
													/>
													<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
												</div>
											}

											{item.fieldType === 'textarea' &&
												<div className={errors[item.elementName] && touched[item.elementName] ? 'error' : ''}>
													<label htmlFor={item.for}>{reactHtmlParser(item.label)}</label>
													<textarea
														type={item.fieldType}
														name={item.elementName}
														onChange={handleChange}
														onBlur={handleBlur}
														placeholder={item.placeholder}
														id={item.id}
														maxLength={item.maxlength}
														size={item.size}
														wrap={item.wrap}
														rows={item.rows}
													/>
													<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
												</div>
											}

											{(item.fieldType === 'email' || item.fieldType === 'emailConf') &&
												<div className={errors[item.elementName] && touched[item.elementName] ? 'error' : ''}>
													<label htmlFor={item.for}>{reactHtmlParser(item.label)}</label>

													<input
														type='email'
														name={item.elementName}
														onChange={handleChange}
														onBlur={handleBlur}
														placeholder={item.placeholder}
														id={item.id}
														maxLength={item.maxlength}
														size={item.size}
													/>

													<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
												</div>
											}

											{item.fieldType === 'input' &&
												<div className={errors[item.elementName] && touched[item.elementName] ? 'error' : ''}>
													<label htmlFor={item.for}>{reactHtmlParser(item.label)}</label>

													<input
														type={item.type}
														name={item.elementName}
														onChange={handleChange}
														onBlur={handleBlur}
														placeholder={item.placeholder}
														id={item.id}
														maxLength={item.maxlength}
														size={item.size}
													/>

													<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
												</div>
											}

											{item.fieldType === 'checkbox' &&
												<div className={errors[item.elementName] && touched[item.elementName] ? 'error' : ''}>
													<div className="checkbox">
														<input
															type={item.fieldType}
															name={item.elementName}
															onChange={handleChange}
															onBlur={handleBlur}
															placeholder={item.placeholder}
															id={item.id}
															maxLength={item.maxlength}
															size={item.size}
														/>
														<label htmlFor={item.for}>{reactHtmlParser(item.label)}</label>
													</div>
													<span className="error-text">{errors[item.elementName] && touched[item.elementName] && errors[item.elementName]}</span>
												</div>
											}

										</div>
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
		</React.Fragment>
	);
};

export default DecisionOptionsItemForm;