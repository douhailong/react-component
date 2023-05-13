import React from 'react';

export function isFragment(node: React.ReactNode) {
  // React.isValidElement  是否是 element
  return React.isValidElement(node) && node.type === React.Fragment;
}
