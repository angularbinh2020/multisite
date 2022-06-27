import branch from 'recompose/branch';
import compose from 'recompose/compose';
import nest from 'recompose/nest';
import renderComponent from 'recompose/renderComponent';
import PeopleModuleStandard from './PeopleModuleStandard';
import PeopleModuleStandardWrapper from './PeopleModuleStandardWrapper';

const wrappedPeopleModuleStandard = nest(
	PeopleModuleStandardWrapper,
	PeopleModuleStandard
);

export default compose(
	branch(({ isRoot }) => isRoot, renderComponent(wrappedPeopleModuleStandard))
)(PeopleModuleStandard);