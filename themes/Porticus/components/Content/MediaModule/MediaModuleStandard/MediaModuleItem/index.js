// includes the import/export for only this Layout
// only JS relevant to this layout should be here, any common functionality should be in the parent
import compose from 'recompose/compose';
import withProps from 'recompose/withProps';
// import withAnimation from '../../../../../../../Helpers/JS/withAnimation';
import MediaModuleItem from './MediaModuleItem';

const animationSettings = {
	animationClass: 'move-left',
	buffer: 0.6
};

const getStyles = ({ image }) => (
	{
		bgImage: {
			backgroundImage: `url(${image.cropUrls.letterbox})`,
		}
	}
);

export default compose(
	withProps(getStyles),
	// withAnimation
)(MediaModuleItem, animationSettings); // daisy chains the above things into the component