import React, { useEffect, useState } from 'react';
import { checkSupportedFlex } from '../checker';

export default function useSupportFlex() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported(checkSupportedFlex());
  }, []);

  return supported;
}
