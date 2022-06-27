// includes the import/export for only this Layout
// only JS relevant to this layout should be here, any common functionality should be in the parent
import compose from 'recompose/compose';
import MediaModuleControls from './MediaModuleControls';

export default compose(

)(MediaModuleControls); // daisy chains the above things into the component