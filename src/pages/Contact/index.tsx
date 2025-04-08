import MainReachOutMethods from '../../components/MainReachOutMethods';
import TitleBox from '../../components/TitleBox';
import { generateContactPageTweens } from './utils';
import S, { classNames } from './styles';
import { useVisitedGSAP } from '../../hooks/useVisitedGSAP';

const Contact = () => {
  useVisitedGSAP(generateContactPageTweens);

  return (
    <S.ContactPage className={classNames.root}>
      <TitleBox
        title="Let's Connect!"
        breadcrumbLinks={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '/contact' },
        ]}
      />
      <MainReachOutMethods />
    </S.ContactPage>
  );
};

export default Contact;
