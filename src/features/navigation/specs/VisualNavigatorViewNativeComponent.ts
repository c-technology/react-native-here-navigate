import type { ViewProps } from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';
import type { GeoCoordinates } from '../../../types/Coordinates';

const COMPONENT_NAME = 'MapsView';

interface NativeProps extends ViewProps {
  waypoints: GeoCoordinates[];
  location: GeoCoordinates;
}

export default codegenNativeComponent<NativeProps>(COMPONENT_NAME);
