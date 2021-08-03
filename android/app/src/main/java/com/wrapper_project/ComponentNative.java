package com.wrapper_project;

import androidx.annotation.NonNull;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class ComponentNative extends SimpleViewManager<JTextView> {
    @NonNull
    @Override
    public String getName() {
        return "RNViewTest";
    }

    @NonNull
    @Override
    protected JTextView createViewInstance(@NonNull ThemedReactContext reactContext) {
        JTextView jTextView = new JTextView(reactContext);
        return jTextView;
    }

    @ReactProp(name="contentB")
    public void setContentB(JTextView jTextView, String contentB) {
        jTextView.setText(contentB);
    }

}
