/* eslint-disable @typescript-eslint/no-explicit-any */
declare module '*.module.scss' {
  const styles: Record<string, string>;
  export default styles;
}

declare module '*.png' {
  const pngName: any;
  export default pngName;
}

declare module '*.jpeg' {
  const jpegName: any;
  export default jpegName;
}
