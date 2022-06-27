import React from 'react';
import LinkItem from '../../../../../../Lego/Linking/LinkItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import reactHtmlParser from 'react-html-parser';
import { Cell, GridX, GridContainer } from '../../../../../../Helpers/JS/Foundation';

import './FooterItemStandard.scss';

const FooterItemStandard = ({
	address,
	ancillaryLinks,
	defaultPageUrl,
	logo,
	navigationLinks,
	navigationLinks2,
	navigationTitle,
	navigationTitle2,
	footerSocialAccounts
}) => {
	const CreateLinkList = ({items, title}) => (
		<React.Fragment>
			{title && <h3 className="footer-nav-links-title">{title}</h3>}
			{items.map((item, index) => (
				<li key={index}>
					<LinkItem
						url={item.url}
						label={item.linkText}
					/>
				</li>
				)
			)}
		</React.Fragment>
	)

	const CreateSocialLinkList = ({items}) => (
		<React.Fragment>
			{items.map((item, index) => (
				<li key={index}>
					<LinkItem
						url={item.url}
					>
						<FontAwesomeIcon
							icon={['fab', item.icon]}
						/>
					</LinkItem>
				</li>
				)
			)}
		</React.Fragment>
	)

	return (
		<footer className="main-footer">
			<GridContainer>
				<GridX>
					<Cell className="small-24 large-4">
						<LinkItem
							url={defaultPageUrl}
						>
							{logo && <img className="footer-logo" src={logo.url} alt={logo.name} />}
						</LinkItem>
					</Cell>

					<Cell className="small-24 large-6 large-offset-8">
						{navigationLinks && (
							<ul className="footer-nav-links">
								<CreateLinkList items={navigationLinks} title={navigationTitle} />
							</ul>
						)}
					</Cell>

					<Cell className="small-24 large-6">
						{navigationLinks2 && (
							<ul className="footer-nav-links">
								<CreateLinkList items={navigationLinks2} title={navigationTitle2}/>
							</ul>
						)}
					</Cell>
				</GridX>

				<GridX>
					<Cell className="small-24 large-6">
						{address && <p className="footer-address">{reactHtmlParser(address)}</p>}
					</Cell>

					<Cell className="small-24 large-18 social-and-ancillary">
						{footerSocialAccounts && (
							<ul className="footer-social-links">
								<CreateSocialLinkList items={footerSocialAccounts} />
							</ul>
						)}

						{ancillaryLinks && (
							<ul className="footer-ancillary-links">
								<CreateLinkList items={ancillaryLinks} />
							</ul>
						)}
					</Cell>
				</GridX>
			</GridContainer>
		</footer>
	);
};

export default FooterItemStandard;
