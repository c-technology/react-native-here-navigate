import {
  requireNativeComponent,
  UIManager,
  type ViewProps,
} from 'react-native';
import { LINKING_ERROR } from '../../constants';
import type { GeoCoordinates } from '../../types/Coordinates';

const COMPONENT_NAME = 'VisualNavigatorView';

interface VisualNavigatorBaseProps extends ViewProps {
  /**
   * ### **(REQUIRED)** The waypoints of the route along which to navigate.
   */
  waypoints: GeoCoordinates[];

  /**
   * ### **(REQUIRED)** The current location of the user. Must be updated for routing.
   *
   * **Example:**
   * ```
   * location={{ latitude: 99.00990, longitude: 9.00990, altitude: 1.07 }}
   * ```
   */
  location: GeoCoordinates;
}

export type VisualNavigatorProps = VisualNavigatorBaseProps;

const RCTVisualNavigatorView =
  UIManager.getViewManagerConfig(COMPONENT_NAME) != null
    ? requireNativeComponent<VisualNavigatorProps>(COMPONENT_NAME)
    : () => {
        throw new Error(LINKING_ERROR);
      };

/**
 * MapsView is the main view responsible for displaying the Map
 */
export function VisualNavigator(props: VisualNavigatorProps) {
  return (
    <RCTVisualNavigatorView {...props} style={[{ flex: 1 }, props.style]} />
  );
}
