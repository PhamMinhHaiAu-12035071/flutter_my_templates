import { ImageProps } from '@commander/ui-kit';
import { ListAssetImage } from '../../../../constants/assetImage';

const styles = {
  image: {
    path: ListAssetImage.logoFlutter.path,
    marginLeft: 34,
    options: {
      width: '15%',
      height: '15%',
      preserveAspectRatio: true,
    },
  } as ImageProps,
};

export { styles };
