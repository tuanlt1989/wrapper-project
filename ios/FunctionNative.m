//
//  FunctionNative.m
//  wrapper_project
//
//  Created by Tuan-Hang on 1/8/21.
//
#import "FunctionNative.h"

@implementation FunctionNative

// If you want export another name without name FunctionNative default
// Example: You want to using name Hello, You can use RCT_EXPORT_MODULE("Hello")
RCT_EXPORT_MODULE()

// Will be called when this module's first listener is added.
-(void)startObserving {
  self.hasListeners = YES;
}

// Will be called when this module's last listener is removed, or on dealloc.
-(void)stopObserving {
  self.hasListeners = NO;
}

- (NSArray<NSString *> *)supportedEvents {
  return @[@"EventReminder"];
}

RCT_EXPORT_METHOD(gotoFunction: (NSString *) value)
{
  printf("%s", [value UTF8String]);
  /// Send event
  if (self.hasListeners) {
    [self sendEventWithName:@"EventReminder" body:@{@"name": @"ok"}];
  }
 
}

@end

