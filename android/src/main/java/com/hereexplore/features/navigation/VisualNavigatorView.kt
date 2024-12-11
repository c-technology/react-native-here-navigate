package com.hereexplore.features.navigation

import android.content.Context
import android.util.AttributeSet
import android.util.Log
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.here.sdk.core.GeoCoordinates
import com.here.sdk.core.GeoOrientationUpdate
import com.here.sdk.core.Location
import com.here.sdk.mapview.MapMeasure
import com.here.sdk.mapview.MapScheme
import com.here.sdk.mapview.MapView
import com.here.sdk.navigation.EventText
import com.here.sdk.navigation.EventTextListener
import com.here.sdk.navigation.VisualNavigator
import com.here.sdk.routing.RoutingEngine
import com.here.sdk.routing.Waypoint
import com.hereexplore.features.map.MapsView
import com.hereexplore.features.map.MapsViewManager
import com.hereexplore.features.routing.calculateRoute
import com.hereexplore.helpers.CoordinatesUtils

class VisualNavigatorView : MapView {
  companion object {
    const val TAG = "VisualNavigatorView"
  }

  private val routingEngine: RoutingEngine by lazy { RoutingEngine() }
  private val visualNavigator: VisualNavigator by lazy { VisualNavigator() }

  private var mapScheme = MapScheme.SATELLITE
  private var location: GeoCoordinates? = null

  constructor(context: Context?) : super(context)

  constructor(context: Context?, attrs: AttributeSet?) : super(context, attrs)

  constructor(context: Context?, attrs: AttributeSet?, defStyleAttr: Int) : super(
    context,
    attrs,
    defStyleAttr
  )

  fun loadCameraView() {
    mapScene.loadScene(mapScheme) { mapError ->
      if (mapError == null) updateCameraView()
      else Log.d(MapsViewManager.TAG, "Loading map failed: mapError" + mapError.name)
    }
  }

  private fun updateCameraView() {
    location?.let {
      camera.lookAt(
        it,
        GeoOrientationUpdate(0.0, 0.0),
        MapMeasure(MapMeasure.Kind.ZOOM_LEVEL, 12.0)
      )
    } ?: Log.d(MapsView.TAG, "updateCameraView: No coordinates Info was given")
  }

  fun setLocation(geoCoordinates: ReadableMap?) {
    if (geoCoordinates == null) return

    location = CoordinatesUtils.toCoordinates(geoCoordinates)
    visualNavigator.onLocationUpdated(Location(location!!))
  }

  fun startGuidance(waypoints: ReadableArray, routeOptions: String) {
    visualNavigator.startRendering(this)
    visualNavigator.eventTextListener =
      EventTextListener { eventText: EventText ->
        Log.d("ManeuverNotifications", eventText.text)
      }
    routingEngine.calculateRoute(
      CoordinatesUtils.toCoordinatesList(waypoints).map { Waypoint(it) },
      routeOptions
    ) { routingError, routes ->
      if (routingError != null) {
        Log.d("RouteComputationError", routingError.name)
      } else if (routes != null) {
        visualNavigator.route = routes[0]
      }
    }
  }
}
