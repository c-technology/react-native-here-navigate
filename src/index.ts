export { ConfigModule as HEREConfig } from './features/config/ConfigModule';

export { RouteOption, useRouting } from './features/routing';
export type {
  OnRouteCalculated,
  RouteOptionType,
  RouteResultType,
} from './features/routing';

export { Map, type MapProps } from './features/map/MapView';

export { Arrow, type ArrowProps } from './features/arrow/ArrowView';

export { Polyline, type PolylineProps } from './features/polyline/PolylineView';

export { Polygon, type PolygonProps } from './features/polygon/PolygonView';

export { Marker, type MarkerProps } from './features/marker/MarkerView';

export { Pin, type PinProps } from './features/pin/PinView';

export {
  VisualNavigator,
  type VisualNavigatorProps,
} from './features/navigation/VisualNavigatorView';

export * from './types';
