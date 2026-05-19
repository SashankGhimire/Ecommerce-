// Root-level fallback JSX types to ensure the editor recognizes JSX
// Remove this file after installing proper `@types/react` and `@types/react-dom`.
declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

export {};
