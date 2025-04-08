import MainReachOutMethods from '../../../components/MainReachOutMethods';
import S, { classNames } from './styles';

const ReachOutSection = () => {
  return (
    <S.ReachOutSection className={classNames.root}>
      <MainReachOutMethods styleVariant="filled" />
    </S.ReachOutSection>
  );
};

export default ReachOutSection;
