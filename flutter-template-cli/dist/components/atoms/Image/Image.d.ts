import React from 'react';
interface Spacing {
    marginLeft?: number;
    marginRight?: number;
    marginTop?: number;
    marginBottom?: number;
}
interface ImageProps extends Spacing {
    path: string;
    options?: Readonly<{
        width?: string | number;
        height?: string | number;
        preserveAspectRatio?: boolean;
    }>;
}
declare const Image: (props: ImageProps) => React.ReactElement | null;
export { Image };
export type { ImageProps };
