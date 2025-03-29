import { ArrowUpRight as LinkIcon } from 'lucide-react';
import S, { classNames } from './styles';
import type { LinkProps } from './props';

const Link = (props: LinkProps) => {
  const { children, variant = 'primary', showLinkIcon = false, ...rest } = props;

  return (
    <S.Link variant={variant} showLinkIcon={showLinkIcon} rel="noreferrer" {...rest}>
      <p className={classNames.textWrapper}>
        <span className={classNames.text}>{children}</span>
        {showLinkIcon && <LinkIcon className={classNames.icon} />}
      </p>
    </S.Link>
  );
};

export default Link;
