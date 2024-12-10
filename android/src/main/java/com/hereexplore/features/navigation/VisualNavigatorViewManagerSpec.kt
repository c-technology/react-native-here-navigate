package com.hereexplore.features.navigation

import android.view.ViewGroup
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.uimanager.ViewGroupManager

abstract class VisualNavigatorViewManagerSpec<T : ViewGroup> : ViewGroupManager<T>() {
  abstract fun setRoute(view: T, value: ReadableMap?)
}
