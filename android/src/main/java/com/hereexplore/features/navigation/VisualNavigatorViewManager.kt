package com.hereexplore.features.navigation

import com.facebook.react.bridge.ReadableMap
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.ThemedReactContext
import com.hereexplore.features.map.MapsView
import com.hereexplore.features.map.MapsViewManager
import com.hereexplore.features.map.MapsViewManager.Companion
import com.hereexplore.features.map.MapsViewManagerSpec

@ReactModule(name = VisualNavigatorViewManager.TAG)
class VisualNavigatorViewManager : VisualNavigatorViewManagerSpec<VisualNavigatorView>() {


  override fun setRoute(view: VisualNavigatorView, value: ReadableMap?) {
    TODO("Not yet implemented")
  }

  override fun getName() = MapsViewManager.TAG

  public override fun createViewInstance(context: ThemedReactContext): MapsView {
    val mapsHereView = MapsView(context)
    mapsHereView.onCreate(null)
    mapsHereView.loadCameraView()
    return mapsHereView
  }

  companion object {
    const val TAG = "VisualNavigatorView"
  }
}
