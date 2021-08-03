
#import <Foundation/Foundation.h>


#import "JTextView.h"
@implementation JTextView

- (void) setContentB:(NSString *)content {
  self.text = content;
}

- (void)reactSetFrame:(CGRect)frame {
    [super reactSetFrame: frame];
}

- (void)insertReactSubview:(UIView *)subview atIndex:(NSInteger)atIndex {
  JTextView * jText = (JTextView*)subview ;
  jText.text = @"Chau len ba";
  [super insertReactSubview:subview atIndex:atIndex];
}

@end

