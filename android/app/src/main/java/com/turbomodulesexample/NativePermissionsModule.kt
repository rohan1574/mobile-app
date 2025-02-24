package com.turbomodulesexample

import android.content.Intent
import android.net.Uri
import android.provider.Settings
import com.turbomodulesexample.NativePermissionsSpec
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class NativePermissionsModule(reactContext: ReactApplicationContext) : NativePermissionsSpec(reactContext) {
    override fun getName() = NAME

    override fun requestOverlayPermission() {
        val intent = Intent(
            Settings.ACTION_MANAGE_OVERLAY_PERMISSION,
            Uri.parse("package:" + reactApplicationContext.packageName)
        )
        reactApplicationContext.startActivityForResult(intent, 0, null)
    }

    companion object {
        const val NAME = "NativePermissions"
    }
}