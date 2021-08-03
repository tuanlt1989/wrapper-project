#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface FunctionNative : RCTEventEmitter<RCTBridgeModule>

@property bool hasListeners;
@end
