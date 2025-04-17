import { Typography } from '@mui/material';
import S, { classNames } from './styles';
import Link from '../../Link';
import { useVisitedGSAP } from '../../../hooks/useVisitedGSAP';
import { generateConnectionInvitationBlockTween } from './utils';

const ConnectInvitationBlock = () => {
  useVisitedGSAP(generateConnectionInvitationBlockTween);

  return (
    <S.ConnectInvitationBlock className={classNames.root}>
      <Typography variant="h3">{"Let's Work Together on Your Next Project"}</Typography>
      <Typography variant="body2">
        {
          "Don't hesitate to reach out through any of the methods provided. I typically respond within 24 hours."
        }
      </Typography>
      <div className={classNames.linksContainer}>
        <Link showLinkIcon href="https://www.linkedin.com/in/davydzakorchennyi/" target="_blank">
          LinkedIn
        </Link>
      </div>
    </S.ConnectInvitationBlock>
  );
};

export default ConnectInvitationBlock;
