package com.hereexplore.features.navigation

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

@ReactModule(name = VisualNavigatorViewManager.TAG)
class VisualNavigatorViewManager : VisualNavigatorViewManagerSpec<VisualNavigatorView>() {
  @ReactProp(name = "waypoints")
  override fun setWaypoints(view: VisualNavigatorView, value: ReadableArray) {
    view.startGuidance(value, "ScooterOptions")
  }

  @ReactProp(name = "location")
  override fun setLocation(view: VisualNavigatorView, value: ReadableMap) {
    view.setLocation(value)
  }

  override fun getName() = TAG

  public override fun createViewInstance(context: ThemedReactContext): VisualNavigatorView {
    val visualNavigatorView = VisualNavigatorView(context)
    visualNavigatorView.onCreate(null)
    visualNavigatorView.loadCameraView()
    return visualNavigatorView
  }

  companion object {
    const val TAG = "VisualNavigatorView"
  }
}
