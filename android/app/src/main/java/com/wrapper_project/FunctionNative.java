package com.wrapper_project;

import android.content.Intent;
import android.util.Log;
import android.widget.Toast;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class FunctionNative extends ReactContextBaseJavaModule {

    FunctionNative(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "FunctionNative";
    }

    @ReactMethod
    void gotoFunction(String content) {
        Toast.makeText(this.getReactApplicationContext(),
                "Call function native", Toast.LENGTH_LONG).show();
        WritableMap payload = Arguments.createMap();
        // Put data to map
        payload.putString("name", "Hello");
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit("EventReminder", payload);
    }

}

