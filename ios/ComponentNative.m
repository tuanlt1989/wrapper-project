//
//  ControlTest.m
//  newProject
//
//  Created by Tuan-Hang on 19/7/21.
//
#import "ComponentNative.h"
#import "JTextView.h"

@implementation ComponentNative

RCT_EXPORT_MODULE(RNViewTest)
RCT_EXPORT_VIEW_PROPERTY(contentB, NSString *);
// Style, child React, return
- (UIView *)view
{
  JTextView *jtextView = [[JTextView alloc] init];
  return jtextView;
}

@end
